// app.js
// Lista de episodios disponibles (podría venir de una API, aquí hardcodeada)
const episodiosDisponibles = [
    {
        slug: 'la-excepcion',
        date: '2025-11-28',
        type: 'audio',
        mediaUrl: 'https://d3ctxlq1ktw2nl.cloudfront.net/staging/2025-10-29/413399242-44100-2-2f259e66aeac3.m4a',
        coverUrl: 'https://s3-us-west-2.amazonaws.com/anchor-generated-image-bank/staging/podcast_uploaded_nologo400/44500417/44500417-1759018829686-8b0dde55850ed.jpg',
        title: 'La excepción en el proceso de administración de Justicia',
        description: 'La excepción en el proceso de administración de Justicia',
        detailUrl: 'https://media.baltaanay.org/teoria-del-proceso',
        allowDownload: false,
        author: 'Barahona',
        series: {
            portada_serie: 'https://media.baltaanay.org/web/image/658-redirect/960bc627aab97e6134955b4d5d1c99d0.jpg',
            titulo_serie: 'Teoría del proceso',
            descripcion_serie: 'Proceso en el derecho y la forma de poner en movimiento la maquinaria de Justicia',
            url_serie: 'https://media.baltaanay.org/teoria-del-proceso'
        }
    },
    {
        slug: 'la-prueba',
        date: '2025-11-21',
        type: 'audio',
        mediaUrl: 'https://d3ctxlq1ktw2nl.cloudfront.net/staging/2025-10-22/413399242-44100-2-2f259e66aeac3.m4a',
        coverUrl: 'https://s3-us-west-2.amazonaws.com/anchor-generated-image-bank/staging/podcast_uploaded_nologo400/44500417/44500417-1759018829686-8b0dde55850ed.jpg',
        title: 'La prueba en el proceso civil',
        description: 'Análisis de la prueba en el proceso civil',
        detailUrl: 'https://media.baltaanay.org/teoria-del-proceso',
        allowDownload: true,
        author: 'Barahona',
        series: {
            portada_serie: 'https://media.baltaanay.org/web/image/658-redirect/960bc627aab97e6134955b4d5d1c99d0.jpg',
            titulo_serie: 'Teoría del proceso',
            descripcion_serie: 'Proceso en el derecho y la forma de poner en movimiento la maquinaria de Justicia',
            url_serie: 'https://media.baltaanay.org/teoria-del-proceso'
        }
    }
];

// Mapeo de slugs a episodios
const episodiosPorSlug = {};
episodiosDisponibles.forEach(ep => { episodiosPorSlug[ep.slug] = ep; });

// Función para renderizar la vista según la ruta
async function router() {
    let path = window.location.pathname;
    // Si hay redirect almacenado por 404.html, lo usamos
    const redirect = sessionStorage.getItem('redirect');
    if (redirect) {
        sessionStorage.removeItem('redirect');
        path = redirect;
        history.replaceState(null, '', path);
    }

    const search = window.location.search;
    const params = new URLSearchParams(search);
    const main = document.getElementById('main-content');

    // Rutas:
    if (path === '/' || path === '/index.html') {
        renderHome(main);
    } else if (path === '/mis-descargas') {
        await renderMisDescargas(main);
    } else if (path.startsWith('/episodio/')) {
        const slug = path.split('/')[2];
        const episodio = episodiosPorSlug[slug];
        if (episodio) {
            // Verificar si hay parámetro download
            if (params.get('download') === 'true') {
                await renderDescarga(main, episodio);
            } else {
                await renderEpisodio(main, episodio);
            }
        } else {
            main.innerHTML = '<h1>Episodio no encontrado</h1>';
        }
    } else {
        main.innerHTML = '<h1>404 - Página no encontrada</h1>';
    }
}

function renderHome(main) {
    main.innerHTML = `
        <h1>Podcast Offline</h1>
        <p>Bienvenido. Explora episodios:</p>
        <ul>
            ${episodiosDisponibles.map(ep => `<li><a href="/episodio/${ep.slug}">${ep.title}</a></li>`).join('')}
        </ul>
        <p><a href="/mis-descargas">Ver mis descargas</a></p>
    `;
}

async function renderEpisodio(main, episodio) {
    // Verificar si ya está descargado
    const descargado = await obtenerEpisodioPorUrl(episodio.mediaUrl);
    const estaDescargado = !!descargado;
    main.innerHTML = `
        <div class="episodio-detalle">
            <img src="${episodio.coverUrl}" alt="Portada" class="cover">
            <h1>${episodio.title}</h1>
            <p>${episodio.author} - ${episodio.date}</p>
            <p>${episodio.description}</p>
            <p><strong>Serie:</strong> ${episodio.series.titulo_serie}</p>
            ${estaDescargado ? 
                '<audio controls src="' + URL.createObjectURL(descargado.audioBlob) + '"></audio><p>Episodio descargado</p>' : 
                '<button id="btn-descargar" class="btn-descargar">Descargar episodio</button>'
            }
            <p><a href="/mis-descargas">Ir a mis descargas</a></p>
        </div>
    `;
    if (!estaDescargado) {
        document.getElementById('btn-descargar').addEventListener('click', () => {
            // Redirigir a la misma URL con parámetro download=true para iniciar descarga
            window.location.href = `/episodio/${episodio.slug}?download=true`;
        });
    } else {
        // Liberar objeto URL después de cargar
        const audio = main.querySelector('audio');
        if (audio) {
            audio.addEventListener('loadeddata', () => URL.revokeObjectURL(audio.src));
        }
    }
}

async function renderDescarga(main, episodio) {
    main.innerHTML = `<h1>Descargando ${episodio.title}...</h1><p>Por favor espera.</p>`;
    try {
        // Descargar blobs
        const [audioBlob, coverBlob] = await Promise.all([
            fetch(episodio.mediaUrl).then(r => {
                if (!r.ok) throw new Error('Error al descargar audio');
                return r.blob();
            }),
            fetch(episodio.coverUrl).then(r => {
                if (!r.ok) throw new Error('Error al descargar portada');
                return r.blob();
            })
        ]);

        const episodioCompleto = {
            ...episodio,
            audioBlob,
            coverBlob,
            fechaDescarga: new Date().toISOString()
        };
        await guardarEpisodio(episodioCompleto);
        main.innerHTML = `
            <h1>¡Descarga completada!</h1>
            <p>El episodio "${episodio.title}" se ha guardado correctamente.</p>
            <a href="/episodio/${episodio.slug}">Volver al episodio</a> | <a href="/mis-descargas">Ver mis descargas</a>
        `;
    } catch (error) {
        main.innerHTML = `<h1>Error en la descarga</h1><p>${error.message}</p><a href="/episodio/${episodio.slug}">Reintentar</a>`;
    }
}

async function renderMisDescargas(main) {
    const episodios = await obtenerEpisodios();
    if (episodios.length === 0) {
        main.innerHTML = '<h1>Mis descargas</h1><p>No tienes episodios descargados. <a href="/">Explora episodios</a>.</p>';
        return;
    }
    let html = '<h1>Mis descargas</h1><div class="lista-descargas">';
    episodios.forEach(ep => {
        const audioUrl = URL.createObjectURL(ep.audioBlob);
        const coverUrl = URL.createObjectURL(ep.coverBlob);
        html += `
            <div class="episodio-card" data-id="${ep.id}">
                <img src="${coverUrl}" alt="cover" class="cover" onload="URL.revokeObjectURL('${coverUrl}')">
                <div>
                    <h3>${ep.title}</h3>
                    <p>${ep.author} - ${ep.date}</p>
                    <audio controls src="${audioUrl}" onloadeddata="URL.revokeObjectURL('${audioUrl}')"></audio>
                    <button class="btn-eliminar" data-id="${ep.id}">Eliminar</button>
                </div>
            </div>
        `;
    });
    html += '</div>';
    main.innerHTML = html;

    // Asignar eventos a botones eliminar
    document.querySelectorAll('.btn-eliminar').forEach(btn => {
        btn.addEventListener('click', async (e) => {
            const id = Number(e.target.dataset.id);
            if (confirm('¿Eliminar este episodio descargado?')) {
                await eliminarEpisodio(id);
                await renderMisDescargas(main); // recargar vista
            }
        });
    });
}

// Escuchar cambios en la navegación (popstate)
window.addEventListener('popstate', router);

// Iniciar la app cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    router();
    // Registrar service worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').catch(console.error);
    }
});

// Capturar clics en enlaces internos para usar navegación SPA
document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (link && link.origin === window.location.origin && !link.target) {
        e.preventDefault();
        const url = new URL(link.href);
        if (url.pathname !== window.location.pathname || url.search !== window.location.search) {
            history.pushState(null, '', url.pathname + url.search);
            router();
        }
    }
});
