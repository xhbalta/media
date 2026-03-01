// episodios.js
// ==================== DATOS CRUDOS DE EPISODIOS ====================
window.USER_EPISODES = [
    { date: '2025-11-28', type: 'audio', mediaUrl: 'https://d3ctxlq1ktw2nl.cloudfront.net/staging/2025-10-29/413399242-44100-2-2f259e66aeac3.m4a', coverUrl: 'https://s3-us-west-2.amazonaws.com/anchor-generated-image-bank/staging/podcast_uploaded_nologo400/44500417/44500417-1759018829686-8b0dde55850ed.jpg', title: 'La excepción en el proceso de administración de Justicia', description: 'La excepción en el proceso de administración de Justicia', detailUrl: '/teoria-del-proceso', allowDownload: false, author: "Barahona", series: { portada_serie: 'https://media.baltaanay.org/web/image/658-redirect/960bc627aab97e6134955b4d5d1c99d0.jpg', titulo_serie: 'Teoría del proceso', descripcion_serie: 'Proceso en el derecho y la forma de poner en movimiento la maquinaria de Justicia', url_serie: '/teoria-del-proceso' } },
    { date: '2025-11-28', type: 'audio', mediaUrl: 'https://balta-derecho.odoo.com/documents/content/3L5vYn32Sq-M5sUKB96S1Ao9', coverUrl: 'https://s3-us-west-2.amazonaws.com/anchor-generated-image-bank/staging/podcast_uploaded_nologo400/44500417/44500417-1759018829686-8b0dde55850ed.jpg', title: 'Principios procesales', description: 'La excepción en el proceso de administración de Justicia', detailUrl: '/teoria-del-proceso', allowDownload: false, author: "Barahona", series: { portada_serie: 'https://media.baltaanay.org/web/image/658-redirect/960bc627aab97e6134955b4d5d1c99d0.jpg', titulo_serie: 'Teoría del proceso', descripcion_serie: 'Proceso en el derecho y la forma de poner en movimiento la maquinaria de Justicia', url_serie: '/teoria-del-proceso' } },
    { date: '2025-11-01', type: 'video', mediaUrl: 'https://lb.s3.odysee.tv/vods2.odysee.live/odysee-replays/84515919a2e010fa2c381702a6777c1035c2deb3/1762812470.mp4', coverUrl: 'https://balta.odoo.com/web/image/417-e2fd48e0/media.webp', coverUrl2: 'https://scout.es/wp-content/uploads/2021/12/186-01.jpg', title: 'Responsabilidad penal en la adolecencia', description: 'Conferencia de Derechos Humanos. Sobre la responsabilidad penal de la adolecencia, las penas y las medidas de seguridad.', detailUrl: '/ddhh/adolecencia', allowDownload: false, author: "Rony Eulalio", series: { portada_serie: 'https://scout.es/wp-content/uploads/2021/12/186-01.jpg', titulo_serie: 'Derechos Humanos', descripcion_serie: 'Derechos Humanos', url_serie: '/ddhh' } },
    { date: '2025-11-01', type: 'video', mediaUrl: 'https://lb.s3.odysee.tv/vods2.odysee.live/odysee-replays/84515919a2e010fa2c381702a6777c1035c2deb3/1762807738.mp4', coverUrl: 'https://balta.odoo.com/web/image/417-e2fd48e0/media.webp', coverUrl2: 'https://balta.odoo.com/web/image/417-e2fd48e0/media.webp', title: 'Repaso de DD Procesal Constitucional', description: 'Penultima clase de Derecho Procesal Constitucional 2025', detailUrl: '/procesal-constitucional', allowDownload: false, author: "César Solares", series: { portada_serie: 'https://balta.odoo.com/web/image/417-e2fd48e0/media.webp', titulo_serie: 'Derecho Procesal Constitucional', descripcion_serie: 'Derecho Procesal Constitucional', url_serie: '/procesal-constitucional' } },
    { date: '2026-02-10', mediaUrl: "https://d3ctxlq1ktw2nl.cloudfront.net/staging/2026-1-13/418061888-44100-2-bd0c488cd9ace.m4a", type: "audio", coverUrl: 'https://media.baltaanay.org/web/image/925-6ed84678/DERECHO%20PENAL%20III.png', title: "Corrientes de la teoría del delito", detailUrl: "/ddpp-3/clases", author: "Lemus", description: "Continuación de las corrientes de la teoría del delito. Teoría causalista, finalista y funcionalista.", allowDownload: false, series: { portada_serie: 'https://media.baltaanay.org/web/image/925-6ed84678/DERECHO%20PENAL%20III.png', titulo_serie: 'Derecho penal 3', descripcion_serie: 'Derecho Público', url_serie: '/ddpp-3/clases' } },
    { date: '2026-02-03', mediaUrl: "https://lb.s3.odysee.tv/vods2.odysee.live/odysee-replays/dd57d90536480f9a751ba4429447fd5f613efce3/1770150346.mp4", type: "video", coverUrl: 'https://media.baltaanay.org/web/image/925-6ed84678/DERECHO%20PENAL%20III.png', coverUrl2: 'https://media.baltaanay.org/web/image/925-6ed84678/DERECHO%20PENAL%20III.png', title: "La teoría causalista", detailUrl: "/ddpp-3/clases", author: "Lemus", description: "Desarrollo de la teoría causalista. Derecho Penal 3. Historia, Ciencia.", allowDownload: false, series: { portada_serie: 'https://media.baltaanay.org/web/image/925-6ed84678/DERECHO%20PENAL%20III.png', titulo_serie: 'Derecho penal 3', descripcion_serie: 'Derecho Público', url_serie: '/ddpp-3/clases' } },
    { date: '2026-01-29', mediaUrl: "https://podcasts.com/api/download-episode/214790939", type: "audio", coverUrl: 'https://media.baltaanay.org/web/image/925-6ed84678/DERECHO%20PENAL%20III.png', title: "¿Qué es el Derecho Penal?", author: "Lemus", description: "Conjunto de normas jurídicas de naturaleza pública que regulan los delitos, las penas y las medidas de seguridad. Ciencia pública. Derecho, Historia.", allowDownload: false, detailUrl: "/ddpp-3/clases", series: { portada_serie: 'https://media.baltaanay.org/web/image/925-6ed84678/DERECHO%20PENAL%20III.png', titulo_serie: 'Derecho penal 3', descripcion_serie: 'Derecho Público', url_serie: '/ddpp-3/clases' } },
    { date: '2026-02-12', mediaUrl: "https://d3ctxlq1ktw2nl.cloudfront.net/staging/2026-1-13/418069738-44100-2-616f210f1eb48.m4a", type: "audio", coverUrl: 'https://media.baltaanay.org/web/image/925-6ed84678/DERECHO%20PENAL%20III.png', title: "La tipicidad y los elementos del delito", detailUrl: "/ddpp-3/clases", author: "Lemus", description: "Análisis profundo del concepto de tipicidad en derecho y sociedad. Una mirada crítica y actual. Ciencia.", allowDownload: false, series: { portada_serie: 'https://media.baltaanay.org/web/image/925-6ed84678/DERECHO%20PENAL%20III.png', titulo_serie: 'Derecho penal 3', descripcion_serie: 'Derecho Público', url_serie: '/ddpp-3/clases' } },
    { date: '2026-02-06', mediaUrl: "https://d3ctxlq1ktw2nl.cloudfront.net/staging/2026-1-13/418064713-44100-2-ed2c58b07cd6.m4a", type: "audio", coverUrl: 'https://media.baltaanay.org/web/image/927-edc793ab/Pueblos%20ind%C3%ADgenas.png', title: "Crisis del Estado de Derecho", detailUrl: "/dp-indigenas", author: "Raymundo", description: "La crisis del Estado de Derecho. Por Lic. Raymundo Catz. El estado de derecho en crisis por los derechos de segunda y tercera generación.", allowDownload: false, series: { portada_serie: 'https://media.baltaanay.org/web/image/927-edc793ab/Pueblos%20ind%C3%ADgenas.png', titulo_serie: 'Derecho de los pueblos indígenas', descripcion_serie: 'Los derechos de tercera generación. Desarrolla los derechos de los pueblos indígenas o también conocidos como derechos de solidaridad.', url_serie: '/dp-indigenas' } },
    { date: '2026-02-04', mediaUrl: "https://lb.s3.odysee.tv/vods2.odysee.live/odysee-replays/dd57d90536480f9a751ba4429447fd5f613efce3/1770236623.mp4", type: "video", coverUrl: 'https://media.baltaanay.org/web/image/927-edc793ab/Pueblos%20ind%C3%ADgenas.png', coverUrl2: 'https://media.baltaanay.org/web/image/927-edc793ab/Pueblos%20ind%C3%ADgenas.png', title: "Conceptos básicos de los Derechos Humanos", detailUrl: "/dp-indigenas", author: "Raymundo", description: "Conceptos básicos de los Derechos Humanos", allowDownload: false, series: { portada_serie: 'https://media.baltaanay.org/web/image/927-edc793ab/Pueblos%20ind%C3%ADgenas.png', titulo_serie: 'Derecho de los pueblos indígenas', descripcion_serie: 'Los derechos de tercera generación. Desarrolla los derechos de los pueblos indígenas o también conocidos como derechos de solidaridad. Ciencias Sociales. Historia.', url_serie: '/dp-indigenas' } },
    { date: '2026-02-02', type: 'video', mediaUrl: 'https://d3ctxlq1ktw2nl.cloudfront.net/staging/2026-1-2/417347225-44100-2-38463f72786e9.m4a', coverUrl: 'https://media.baltaanay.org/web/image/929-b905c3ef/DERECHO%20LABORAL.png', coverUrl2: 'https://media.baltaanay.org/web/image/929-b905c3ef/DERECHO%20LABORAL.png', title: 'Antecedentes Históricos del derecho de Trabajo', description: 'Antecedentes históricos del derecho de trabajo. Avidan Ortiz. Historia del derecho Laboral.', detailUrl: '/derecho-laboral-1', allowDownload: false, author: "Avidan Ortiz", series: { portada_serie: 'https://media.baltaanay.org/web/image/929-b905c3ef/DERECHO%20LABORAL.png', titulo_serie: 'Derecho Laboral', descripcion_serie: 'Un derecho humano por excelencia. Es la ciencia, una disciplina pública. Ciencias Sociales.', url_serie: '/derecho-laboral-1' } },
    { date: '2026-02-06', type: 'video', mediaUrl: 'https://d3ctxlq1ktw2nl.cloudfront.net/staging/2026-1-13/ca5f6f25-3b96-ff31-bb04-e712a81ce076.m4a', coverUrl: 'https://media.baltaanay.org/web/image/929-b905c3ef/DERECHO%20LABORAL.png', coverUrl2: 'https://media.baltaanay.org/web/image/929-b905c3ef/DERECHO%20LABORAL.png', title: 'Fuentes del Derecho de Trabajo', description: 'Historia. Fuentes del Derecho de trabajo. Ciencia.', detailUrl: '/derecho-laboral-1', allowDownload: false, author: "Avidan Ortiz", series: { portada_serie: 'https://media.baltaanay.org/web/image/929-b905c3ef/DERECHO%20LABORAL.png', titulo_serie: 'Derecho Laboral', descripcion_serie: 'Un derecho humano por excelencia. Es la ciencia, una disciplina pública. Ciencias Sociales.', url_serie: '/derecho-laboral-1' } },
    { date: '2025-09-27', type: 'audio', mediaUrl: 'https://d3ctxlq1ktw2nl.cloudfront.net/staging/2025-8-28/408260699-44100-2-4b5edeb875805.m4a', coverUrl: 'https://s3-us-west-2.amazonaws.com/anchor-generated-image-bank/staging/podcast_uploaded_episode400/44500417/44500417-1759018710643-950caadc41ea7.jpg', title: 'Veliz Franco y Otros Vs. Guatemala - Exposición', description: 'Guatemala presentaba un alto índice de impunidad general, en cuyo marco la mayoría de los actos violentos que conllevaban la muerte de mujeres quedaban impunes.', detailUrl: '/dh/caso-veliz-franco-vs-guatemala', allowDownload: true, author: "Melany y Laura", series: { portada_serie: 'https://scout.es/wp-content/uploads/2021/12/186-01.jpg', titulo_serie: 'Derechos Humanos', descripcion_serie: 'Derechos humanos', url_serie: '/ddhh' } }
];

// ==================== FUNCIÓN DE CATEGORÍAS ====================
window.determineCategories = function(ep) {
    const cats = new Set();
    const text = (ep.title + ' ' + ep.description + ' ' + (ep.series?.titulo_serie || '') + ' ' + (ep.series?.descripcion_serie || '')).toLowerCase();
    const patterns = {
        "Derecho": /\b(derecho|penal|civil|constitucional|procesal|delito|ley|jurisprudencia|código|tribunal|justicia|proceso)\b/i,
        "Física y Astronomía": /\b(física|fisica|mecánica|mecanica|cuántica|cuantica|termodinámica|termodinamica|newton|einstein|astronomía|astronomia|planeta|cosmos)\b/i,
        "Matemáticas": /\b(matemática|matematicas|calculo|cálculo|algebra|álgebra|geometria|geometría|estadistica|estadística|probabilidad|ecuacion|ecuación|teorema|integral)\b/i,
        "Historia": /\b(historia|histórico|historico|siglo|época|epoca|imperio|guerra|revolución|revolucion|antiguo|medieval)\b/i,
        "Filosofía": /\b(filosofía|filosofia|kant|platon|platón|aristoteles|ética|etica|metafísica|metafisica|ontología|ontologia|epistemología|epistemologia)\b/i,
        "Economía y Finanzas": /\b(economía|economia|finanzas|inflación|inflacion|keynes|oferta|demanda|macroeconomía|macroeconomia|pib|mercado)\b/i,
        "Ciencias Sociales": /\b(sociología|sociologia|antropología|antropologia|psicología|psicologia|sociedad|cultura|identidad|género|genero|desigualdad)\b/i,
        "Arte y Cultura": /\b(arte|pintura|escultura|arquitectura|renacimiento|barroco|música|musica|cultura|artístico|artistico)\b/i,
        "Literatura y Audiolibros": /\b(audiolibro|libro|novela|cuento|poema|clásico|clasico|literatura|lectura)\b/i,
        "Cine y TV": /\b(cine|película|pelicula|serie|director|guion|ficción|ficcion|animación|animacion)\b/i,
        "Documentales": /\b(documental|bbc|ciencia|naturaleza|espacio|universo|planeta|nacional geographic)\b/i,
        "Ciencias Naturales": /\b(biología|biologia|química|quimica|geología|geologia|ecología|ecologia|evolución|evolucion|genética|genetica|clima|botánica|botanica)\b/i,
        "Tecnología e Informática": /\b(tecnología|tecnologia|programación|programacion|python|ia|computación|computacion|algoritmo|software|desarrollo)\b/i
    };
    for (const [cat, regex] of Object.entries(patterns)) {
        if (regex.test(text)) cats.add(cat);
    }
    if (ep.type === 'video') {
        if (text.includes('documental')) cats.add("Documentales");
        else cats.add("Cine y TV");
    }
    if (cats.size === 0) cats.add("Otras Ciencias");
    return Array.from(cats);
};

// ==================== PROCESAR EPISODIOS ====================
window.processEpisodes = function() {
    return window.USER_EPISODES.map((ep, i) => ({
        id: i,
        slug: ep.detailUrl.split('/').pop() || `ep-${i}`,
        title: ep.title,
        author: ep.author || ep.series?.titulo_serie || 'Conferencias Académicas',
        categories: window.determineCategories(ep),
        cover: ep.coverUrl,
        coverWide: ep.coverUrl2 || ep.coverUrl,
        mediaUrl: ep.mediaUrl,
        type: ep.type,
        description: ep.description + ' ' + (ep.series?.descripcion_serie || ''),
        allowDownload: ep.allowDownload !== undefined ? ep.allowDownload : true,
        detailUrl: ep.detailUrl,
        date: ep.date,
        series: ep.series
    }));
};

// ==================== PROGRAMA DEL DÍA ====================
(function() {
    let allEpisodes = window.USER_EPISODES; // usar los mismos
    let archive = [];
    let calendar = [];

    function getCurrentDate() {
        const now = new Date().toLocaleString('en-US', { timeZone: 'America/Guatemala' });
        const date = new Date(now);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    function classifyEpisodes() {
        const todayStr = getCurrentDate();
        const today = new Date(todayStr + 'T00:00:00-06:00');
        archive = allEpisodes.filter(ep => new Date(ep.date + 'T00:00:00-06:00') < today);
        calendar = allEpisodes.filter(ep => new Date(ep.date + 'T00:00:00-06:00') > today);
    }

    window.getDailyEpisodeData = function() {
        classifyEpisodes();
        const todayStr = getCurrentDate();
        let dailyEpisode = allEpisodes.find(ep => ep.date === todayStr);
        if (!dailyEpisode && calendar.length > 0) {
            calendar.sort((a, b) => new Date(a.date) - new Date(b.date));
            dailyEpisode = calendar[0];
        }
        if (!dailyEpisode && archive.length > 0) {
            archive.sort((a, b) => new Date(b.date) - new Date(a.date));
            dailyEpisode = archive[0];
        }
        if (!dailyEpisode) {
            dailyEpisode = {
                coverUrl: 'https://gracia.org/media/ResourceImages/GAV-50.jpg',
                title: 'No hay episodios disponibles',
                description: 'Revisa más tarde.',
                detailUrl: '#',
                type: 'audio',
                mediaUrl: '',
                series: {
                    portada_serie: 'https://gracia.org/media/ResourceImages/GAV-50.jpg',
                    titulo_serie: 'Sin serie',
                    descripcion_serie: 'No hay contenido programado.',
                    url_serie: '/series'
                }
            };
        }
        window.PROGRAMA_DEL_DIA = {
            mediaUrl: dailyEpisode.mediaUrl || '',
            mediaType: dailyEpisode.type || 'audio',
            coverUrlContainer: dailyEpisode.coverUrl || 'https://gracia.org/media/ResourceImages/GAV-50.jpg',
            coverUrlInfo: dailyEpisode.coverUrl || 'https://gracia.org/media/ResourceImages/GAV-50.jpg',
            title: dailyEpisode.title || 'Sin episodio',
            detailUrl: dailyEpisode.detailUrl || '/serie/josue'
        };
        localStorage.setItem('dailyEpisode', JSON.stringify(window.PROGRAMA_DEL_DIA));
        return window.PROGRAMA_DEL_DIA;
    };

    window.formatDate = function(dateStr) {
        try {
            const date = new Date(dateStr + 'T00:00:00-06:00');
            if (isNaN(date.getTime())) throw new Error('Fecha inválida');
            const formatter = new Intl.DateTimeFormat('es-GT', {
                timeZone: 'America/Guatemala',
                weekday: 'long',
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            });
            return formatter.format(date);
        } catch (error) {
            return 'Fecha no disponible';
        }
    };

    // Inicializar
    getDailyEpisodeData();
})();

// ==================== RECOMENDADOS ====================
Object.defineProperty(window, 'RECOMENDADOS', {
    get: function() {
        let shuffled = [...window.USER_EPISODES].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, 15);
    },
    configurable: true
});
