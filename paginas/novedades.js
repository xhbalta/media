// /paginas/novedades.js
(function() {
    // Estilos específicos para novedades (si no están ya en el index)
    const styles = `
        /* Estilos para la página de novedades */
        .np-hero-carousel {
            position: relative;
            width: 100%;
            height: 500px;
            border-radius: 24px;
            overflow: hidden;
            margin-bottom: 40px;
            background: #111;
        }
        .np-hero-slide {
            position: absolute;
            inset: 0;
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            padding: 0;
            cursor: pointer;
        }
        .np-hero-slide.active {
            opacity: 1;
            z-index: 2;
        }
        .np-hero-image {
            width: 60%;
            height: 100%;
            position: relative;
            overflow: hidden;
            pointer-events: none;
        }
        .np-hero-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
        }
        .np-hero-image::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 70%;
            height: 100%;
            background: linear-gradient(to right, #050505 0%, rgba(5,5,5,0.8) 50%, transparent 100%);
            z-index: 2;
            pointer-events: none;
        }
        .np-hero-content {
            position: absolute;
            left: 0;
            top: 0;
            width: 50%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 60px;
            z-index: 3;
            color: white;
            background: transparent;
            pointer-events: none;
        }
        .np-hero-content h1,
        .np-hero-content .author,
        .np-hero-controls {
            pointer-events: auto;
        }
        .np-hero-content h1 {
            font-size: 3.5rem;
            font-weight: 800;
            line-height: 1.1;
            margin-bottom: 16px;
            text-shadow: 0 2px 10px rgba(0,0,0,0.5);
        }
        .np-hero-content .author {
            font-size: 1.2rem;
            color: #ccc;
            margin-bottom: 24px;
        }
        .np-hero-controls {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 30px;
        }
        .np-hero-controls-left {
            display: flex;
            gap: 20px;
        }
        .np-hero-controls-left button {
            background: rgba(255,255,255,0.1);
            border: none;
            border-radius: 50%;
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: background 0.2s, transform 0.2s;
        }
        .np-hero-controls-left button:hover {
            background: rgba(255,255,255,0.3);
            transform: scale(1.05);
        }
        .np-hero-controls-left button img {
            width: 24px;
            height: 24px;
            filter: brightness(0) invert(1);
        }
        .np-hero-play-btn {
            background: #3b82f6;
            border: none;
            border-radius: 40px;
            padding: 12px 32px;
            font-weight: bold;
            font-size: 1.1rem;
            color: white;
            display: flex;
            align-items: center;
            gap: 10px;
            cursor: pointer;
            transition: background 0.2s, transform 0.2s;
        }
        .np-hero-play-btn:hover {
            background: #2563eb;
            transform: scale(1.05);
        }
        .np-hero-play-btn img {
            width: 24px;
            height: 24px;
            filter: brightness(0) invert(1);
        }
        .np-hero-indicators {
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 12px;
            z-index: 4;
        }
        .np-hero-indicator {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: rgba(255,255,255,0.4);
            cursor: pointer;
            transition: background 0.2s, transform 0.2s;
        }
        .np-hero-indicator.active {
            background: white;
            transform: scale(1.2);
        }
        .np-hero-arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 48px;
            height: 48px;
            background: rgba(0,0,0,0.5);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 28px;
            cursor: pointer;
            z-index: 5;
            transition: background 0.2s;
            border: 1px solid rgba(255,255,255,0.2);
        }
        .np-hero-arrow:hover {
            background: rgba(0,0,0,0.8);
        }
        .np-hero-arrow.left {
            left: 20px;
        }
        .np-hero-arrow.right {
            right: 20px;
        }
        @media (max-width: 768px) {
            .np-hero-slide {
                justify-content: flex-end;
            }
            .np-hero-image {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
            }
            .np-hero-image::before {
                background: linear-gradient(to top, #050505 0%, rgba(5,5,5,0.8) 40%, transparent 100%);
                width: 100%;
                height: 70%;
                top: auto;
                bottom: 0;
                left: 0;
            }
            .np-hero-content {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                padding: 20px;
                background: transparent;
                pointer-events: auto;
                z-index: 3;
                height: auto;
                top: auto;
                justify-content: flex-end;
            }
            .np-hero-content h1 {
                font-size: 2rem;
                margin-bottom: 8px;
            }
            .np-hero-content .author {
                font-size: 1rem;
                margin-bottom: 16px;
            }
            .np-hero-controls {
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                margin-top: 10px;
            }
            .np-hero-controls-left {
                display: none;
            }
            .np-hero-play-btn {
                width: 100%;
                justify-content: center;
            }
        }
        .np-carousel-wrapper {
            position: relative;
            margin-top: 48px;
        }
        .np-section-header {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            margin-bottom: 20px;
            padding: 0 4px;
        }
        .np-section-header h2 {
            font-size: 2rem;
            font-weight: 800;
            letter-spacing: -0.02em;
            transition: color 0.2s;
        }
        .np-section-header h2:hover {
            color: #3b82f6;
        }
        .np-section-header button {
            font-size: 0.75rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: #aaa;
            background: none;
            border: none;
            cursor: pointer;
            transition: color 0.2s;
        }
        .np-section-header button:hover {
            color: white;
        }
        .np-nav-btn {
            position: absolute;
            top: 0;
            bottom: 0;
            z-index: 40;
            width: 60px;
            display: none;
            align-items: center;
            justify-content: center;
            transition: opacity 0.3s;
        }
        .np-nav-btn.left {
            left: 0;
            background: linear-gradient(to right, #050505 0%, transparent 100%);
        }
        .np-nav-btn.right {
            right: 0;
            background: linear-gradient(to left, #050505 0%, transparent 100%);
        }
        .np-nav-btn button {
            background: rgba(255,255,255,0.1);
            backdrop-filter: blur(10px);
            border-radius: 50%;
            width: 40px;
            height: 40px;
            border: 1px solid rgba(255,255,255,0.1);
            color: white;
            font-size: 20px;
            cursor: pointer;
            transition: transform 0.2s, background 0.2s;
        }
        .np-nav-btn button:hover {
            background: rgba(255,255,255,0.3);
            transform: scale(1.1);
        }
        .np-carousel-wrapper:hover .np-nav-btn {
            display: flex;
        }
        .np-horizontal-scroll {
            display: flex;
            gap: 24px;
            overflow-x: auto;
            scroll-behavior: smooth;
            padding: 8px 4px;
        }
        .np-card-std {
            min-width: 200px;
            width: 200px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            cursor: pointer;
            position: relative;
        }
        .np-card-std .np-img-container {
            width: 100%;
            aspect-ratio: 1/1;
            border-radius: 12px;
            overflow: hidden;
            background: #1a1a1a;
            position: relative;
        }
        .np-card-std img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s;
        }
        .np-card-std:hover img {
            transform: scale(1.05);
        }
        .np-overlay-full {
            position: absolute;
            inset: 0;
            background: rgba(0,0,0,0.5);
            backdrop-filter: blur(2px);
            opacity: 0;
            transition: opacity 0.3s;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            border-radius: 12px;
        }
        .np-card-std:hover .np-overlay-full {
            opacity: 1;
        }
        .np-overlay-full img.np-icon-add,
        .np-overlay-full img.np-icon-dl {
            width: 36px;
            height: 36px;
            cursor: pointer;
            transition: transform 0.2s;
            filter: brightness(0) invert(1);
        }
        .np-overlay-full img.np-icon-play {
            width: 56px;
            height: 56px;
            cursor: pointer;
            transition: transform 0.2s;
            filter: brightness(0) invert(1);
        }
        .np-overlay-full img:hover {
            transform: scale(1.1);
        }
        .np-mobile-play {
            position: absolute;
            bottom: 8px;
            right: 8px;
            width: 40px;
            height: 40px;
            background: rgba(0,0,0,0.7);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 30;
            border: 1px solid rgba(255,255,255,0.2);
        }
        .np-mobile-play img {
            width: 20px;
            height: 20px;
            filter: brightness(0) invert(1);
        }
        @media (min-width: 1024px) {
            .np-mobile-play {
                display: none;
            }
        }
        .np-card-video {
            height: 220px;
            width: 220px;
            flex-shrink: 0;
            position: relative;
            overflow: hidden;
            border-radius: 12px;
            transition: width 0.5s cubic-bezier(0.25, 1, 0.5, 1);
            cursor: pointer;
        }
        @media (min-width: 1024px) {
            .np-card-video:hover {
                width: 390px;
            }
        }
        .np-card-video img {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: opacity 0.3s;
        }
        .np-card-video .img-default {
            z-index: 1;
        }
        .np-card-video .img-wide {
            opacity: 0;
            z-index: 2;
        }
        .np-card-video:hover .img-wide {
            opacity: 1;
        }
        .np-card-video .np-overlay-full {
            z-index: 3;
        }
        .np-video-badge {
            position: absolute;
            bottom: 8px;
            left: 8px;
            background: rgba(0,0,0,0.6);
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 0.7rem;
            font-weight: bold;
            z-index: 5;
        }
        .np-grid-container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
            margin-top: 24px;
        }
        @media (min-width: 768px) {
            .np-grid-container {
                grid-template-columns: repeat(3, 1fr);
            }
        }
        @media (min-width: 1024px) {
            .np-grid-container {
                grid-template-columns: repeat(4, 1fr);
            }
        }
        @media (min-width: 1280px) {
            .np-grid-container {
                grid-template-columns: repeat(5, 1fr);
            }
        }
        .np-series-group {
            min-width: 340px;
            display: flex;
            flex-direction: column;
            gap: 16px;
        }
        .np-series-item {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 6px;
            border-radius: 8px;
            cursor: pointer;
            transition: background 0.2s;
        }
        .np-series-item:hover {
            background: rgba(255,255,255,0.08);
        }
        .np-series-thumb {
            width: 56px;
            height: 56px;
            border-radius: 6px;
            overflow: hidden;
            position: relative;
            flex-shrink: 0;
        }
        .np-series-thumb img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .np-overlay-mini {
            position: absolute;
            inset: 0;
            background: rgba(0,0,0,0.4);
            opacity: 0;
            transition: opacity 0.2s;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 4px;
        }
        .np-series-item:hover .np-overlay-mini {
            opacity: 1;
        }
        .np-play-icon-sm {
            width: 20px;
            height: 20px;
            filter: brightness(0) invert(1);
        }
        .np-title {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-weight: bold;
        }
        .np-author {
            font-size: 0.8rem;
            color: #aaa;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    `;

    // Función para inyectar estilos (si no están ya)
    function injectStyles() {
        if (document.getElementById('novedades-styles')) return;
        const style = document.createElement('style');
        style.id = 'novedades-styles';
        style.textContent = styles;
        document.head.appendChild(style);
    }

    // Función para crear una tarjeta estándar (usa los mismos iconos globales)
    function createStandardCard(item) {
        const isInPlaylist = window.isInPlaylist ? window.isInPlaylist(item.mediaUrl) : false;
        const addIcon = isInPlaylist ? window.ICONS.added : window.ICONS.add;
        const dlIcon = item.allowDownload ? window.ICONS.dl : window.ICONS.noDl;
        return `
            <div class="np-card-std" data-mediaurl="${item.mediaUrl}">
                <div class="np-img-container" onclick="window.goToDetail('${item.detailUrl}')">
                    <img src="${item.cover}" loading="lazy">
                    <div class="np-overlay-full">
                        <img src="${addIcon}" class="np-icon-add" onclick="event.stopPropagation(); window.handleAdd(event, '${item.mediaUrl}'); return false;" 
                             data-mediaurl="${item.mediaUrl}" data-added="${isInPlaylist}">
                        <img src="${window.ICONS.play}" class="np-icon-play" onclick="event.stopPropagation(); window.handlePlay(event, '${item.mediaUrl}'); return false;">
                        <img src="${dlIcon}" class="np-icon-dl" onclick="event.stopPropagation(); window.handleDl(event, '${item.mediaUrl}'); return false;" 
                             title="${item.allowDownload ? 'Descargar' : 'Descarga no disponible'}">
                    </div>
                    <span class="np-mobile-play" onclick="event.stopPropagation(); window.handlePlay(event, '${item.mediaUrl}'); return false;">
                        <img src="${window.ICONS.play}">
                    </span>
                </div>
                <div onclick="window.goToDetail('${item.detailUrl}')">
                    <div class="np-title">${item.title}</div>
                    <div class="np-author">${item.author}</div>
                </div>
            </div>
        `;
    }

    // Función para crear tarjeta de video expandible
    function createVideoCard(item) {
        const isInPlaylist = window.isInPlaylist ? window.isInPlaylist(item.mediaUrl) : false;
        const addIcon = isInPlaylist ? window.ICONS.added : window.ICONS.add;
        const dlIcon = item.allowDownload ? window.ICONS.dl : window.ICONS.noDl;
        const hasCover2 = item.coverWide && item.coverWide !== item.cover;
        return `
            <div class="np-card-video" data-mediaurl="${item.mediaUrl}">
                <img src="${item.cover}" class="img-default">
                ${hasCover2 ? `<img src="${item.coverWide}" class="img-wide">` : ''}
                <div class="np-overlay-full">
                    <img src="${addIcon}" class="np-icon-add" onclick="event.stopPropagation(); window.handleAdd(event, '${item.mediaUrl}'); return false;" 
                         data-mediaurl="${item.mediaUrl}" data-added="${isInPlaylist}">
                    <img src="${window.ICONS.play}" class="np-icon-play" onclick="event.stopPropagation(); window.handlePlay(event, '${item.mediaUrl}'); return false;">
                    <img src="${dlIcon}" class="np-icon-dl" onclick="event.stopPropagation(); window.handleDl(event, '${item.mediaUrl}'); return false;" 
                         title="${item.allowDownload ? 'Descargar' : 'Descarga no disponible'}">
                </div>
                <span class="np-mobile-play" onclick="event.stopPropagation(); window.handlePlay(event, '${item.mediaUrl}'); return false;">
                    <img src="${window.ICONS.play}">
                </span>
                <div class="np-video-badge">VIDEO</div>
            </div>
        `;
    }

    // Función para crear item de serie (para el carrusel de series)
    function createSeriesItem(ep, idx) {
        const isInPlaylist = window.isInPlaylist ? window.isInPlaylist(ep.mediaUrl) : false;
        const addIcon = isInPlaylist ? window.ICONS.added : window.ICONS.add;
        return `
            <div class="np-series-item" data-mediaurl="${ep.mediaUrl}">
                <span style="color:#666; width:20px; text-align:center;">${idx+1}</span>
                <div class="np-series-thumb" onclick="window.goToDetail('${ep.detailUrl}')">
                    <img src="${ep.cover}" loading="lazy">
                    <div class="np-overlay-mini" onclick="event.stopPropagation(); window.handlePlay(event, '${ep.mediaUrl}'); return false;">
                        <img src="${window.ICONS.play}" class="np-play-icon-sm">
                    </div>
                </div>
                <div style="flex:1; min-width:0;" onclick="window.goToDetail('${ep.detailUrl}')">
                    <div class="np-title">${ep.title}</div>
                    <div class="np-author">${ep.author}</div>
                </div>
                <button class="np-add-btn" style="background:none; border:none; cursor:pointer;" onclick="event.stopPropagation(); window.handleAdd(event, '${ep.mediaUrl}'); return false;">
                    <img src="${addIcon}" style="width:20px; height:20px; filter: brightness(0) invert(1);">
                </button>
            </div>
        `;
    }

    // Función para envolver en carrusel con botones
    function wrapInCarousel(contentHTML, idSuffix = "") {
        const id = 'c-' + Math.random().toString(36).substr(2, 9) + idSuffix;
        return `
            <div class="np-carousel-wrapper relative group/car">
                <div class="np-nav-btn left" onclick="document.getElementById('${id}').scrollLeft -= 600">
                    <button>❮</button>
                </div>
                <div id="${id}" class="np-horizontal-scroll np-no-scrollbar">
                    ${contentHTML}
                </div>
                <div class="np-nav-btn right" onclick="document.getElementById('${id}').scrollLeft += 600">
                    <button>❯</button>
                </div>
            </div>
        `;
    }

    // Función principal de renderizado
    function renderNovedades() {
        const container = document.getElementById('page-view');
        if (!container) return;

        // Usar los datos globales
        const data = window.DATA || [];
        if (data.length === 0) {
            container.innerHTML = '<div class="text-center py-20"><p class="text-gray-400">No hay contenido disponible</p></div>';
            return;
        }

        // Preparar datos para el hero (los 5 más recientes)
        const heroItems = [...data].sort((a,b) => new Date(b.date) - new Date(a.date)).slice(0,5);

        // Preparar series únicas
        const seriesMap = {};
        data.forEach(ep => {
            if (ep.series && ep.series.titulo_serie) {
                const key = ep.series.titulo_serie;
                if (!seriesMap[key]) {
                    seriesMap[key] = { info: ep.series, episodes: [] };
                }
                seriesMap[key].episodes.push(ep);
            }
        });
        let seriesArray = Object.values(seriesMap);
        // Aleatorizar el orden de las series
        seriesArray = seriesArray.sort(() => Math.random() - 0.5);

        // Videos destacados
        const videos = data.filter(ep => ep.type === 'video').slice(0, 10);

        // Grid aleatorio
        const randomItems = [...data].sort(() => 0.5 - Math.random()).slice(0, 20);

        // Construir HTML
        let html = `
            <div class="np-hero-carousel" id="heroCarousel">
                <div class="np-hero-arrow left" id="heroPrev">❮</div>
                <div class="np-hero-arrow right" id="heroNext">❯</div>
                <div id="heroSlidesContainer"></div>
                <div class="np-hero-indicators" id="heroIndicators"></div>
            </div>
        `;

        // Sección de series
        if (seriesArray.length > 0) {
            let seriesHTML = '';
            seriesArray.forEach(serie => {
                const s = serie.info;
                const episodes = serie.episodes.sort((a,b) => new Date(b.date) - new Date(a.date)).slice(0,4);
                let groupHTML = `<div class="np-series-group">`;
                groupHTML += `
                    <div class="np-series-item" style="padding-left:0;" onclick="window.goToDetail('${s.url_serie}')">
                        <div class="np-series-thumb">
                            <img src="${s.portada_serie || episodes[0]?.cover}" loading="lazy">
                        </div>
                        <div style="flex:1; min-width:0;">
                            <div class="np-title">${s.titulo_serie}</div>
                            <div class="np-author">${episodes.length} episodios</div>
                        </div>
                    </div>
                `;
                episodes.forEach((ep, idx) => {
                    groupHTML += createSeriesItem(ep, idx);
                });
                groupHTML += `</div>`;
                seriesHTML += groupHTML;
            });
            html += `
                <section class="np-carousel-wrapper">
                    <div class="np-section-header">
                        <h2>Series destacadas</h2>
                        <button onclick="window.Router.navigate('/series')">Ver todo</button>
                    </div>
                    ${wrapInCarousel(seriesHTML, '-series')}
                </section>
            `;
        }

        // Sección de videos
        if (videos.length > 0) {
            const videosHTML = videos.map(ep => createVideoCard(ep)).join('');
            html += `
                <section class="np-carousel-wrapper" style="margin-top: 48px;">
                    <div class="np-section-header">
                        <h2>Videos destacados</h2>
                        <button onclick="window.Router.navigate('/videos')">Ver todo</button>
                    </div>
                    ${wrapInCarousel(videosHTML, '-videos')}
                </section>
            `;
        }

        // Sección de descubrir (grid aleatorio)
        if (randomItems.length > 0) {
            const gridHTML = randomItems.map(ep => createStandardCard(ep)).join('');
            html += `
                <section style="margin-top: 48px;">
                    <div class="np-section-header">
                        <h2>Descubrir</h2>
                        <button onclick="window.novedades.actualizarAleatorios()">↻ Actualizar</button>
                    </div>
                    <div id="randomGrid" class="np-grid-container">
                        ${gridHTML}
                    </div>
                </section>
            `;
        }

        container.innerHTML = html;

        // Inicializar hero carrusel
        initHero(heroItems);

        // Guardar función de actualizar aleatorios
        window.novedades = window.novedades || {};
        window.novedades.actualizarAleatorios = function() {
            const randomItems = [...data].sort(() => 0.5 - Math.random()).slice(0, 20);
            const grid = document.getElementById('randomGrid');
            if (grid) {
                grid.innerHTML = randomItems.map(ep => createStandardCard(ep)).join('');
            }
        };
    }

    // Función para inicializar el hero carrusel
    function initHero(items) {
        let heroIndex = 0;
        const container = document.getElementById('heroSlidesContainer');
        const indicators = document.getElementById('heroIndicators');
        if (!container || !indicators) return;

        let slidesHtml = '';
        let indHtml = '';
        items.forEach((item, idx) => {
            const activeClass = idx === 0 ? 'active' : '';
            slidesHtml += `
                <div class="np-hero-slide ${activeClass}" data-index="${idx}" onclick="window.goToDetail('${item.detailUrl}')">
                    <div class="np-hero-content" onclick="event.stopPropagation();">
                        <h1 onclick="event.stopPropagation(); window.goToDetail('${item.detailUrl}')">${item.title}</h1>
                        <div class="author" onclick="event.stopPropagation(); window.goToDetail('${item.detailUrl}')">${item.author}</div>
                        <div class="np-hero-controls" onclick="event.stopPropagation();">
                            <div class="np-hero-controls-left">
                                <button onclick="event.stopPropagation(); window.handleDl(event, '${item.mediaUrl}')" title="Descargar"><img src="${item.allowDownload ? window.ICONS.dl : window.ICONS.noDl}"></button>
                                <button onclick="event.stopPropagation(); window.handleAdd(event, '${item.mediaUrl}')" title="Añadir a lista"><img src="${window.ICONS.add}"></button>
                            </div>
                            <button class="np-hero-play-btn" onclick="event.stopPropagation(); window.handlePlay(event, '${item.mediaUrl}')">
                                <img src="${window.ICONS.play}"> Reproducir
                            </button>
                        </div>
                    </div>
                    <div class="np-hero-image">
                        <img src="${item.coverWide || item.cover}" alt="${item.title}">
                    </div>
                </div>
            `;
            indHtml += `<span class="np-hero-indicator ${idx === 0 ? 'active' : ''}" data-index="${idx}"></span>`;
        });
        container.innerHTML = slidesHtml;
        indicators.innerHTML = indHtml;

        function showHeroSlide(index) {
            const slides = document.querySelectorAll('.np-hero-slide');
            const indicators = document.querySelectorAll('.np-hero-indicator');
            if (!slides.length) return;
            if (index < 0) index = slides.length - 1;
            if (index >= slides.length) index = 0;
            slides.forEach((s, i) => s.classList.toggle('active', i === index));
            indicators.forEach((ind, i) => ind.classList.toggle('active', i === index));
            heroIndex = index;
        }

        document.getElementById('heroPrev').addEventListener('click', (e) => {
            e.stopPropagation();
            showHeroSlide(heroIndex - 1);
        });
        document.getElementById('heroNext').addEventListener('click', (e) => {
            e.stopPropagation();
            showHeroSlide(heroIndex + 1);
        });
        document.querySelectorAll('.np-hero-indicator').forEach(el => {
            el.addEventListener('click', (e) => {
                e.stopPropagation();
                const idx = parseInt(el.dataset.index);
                showHeroSlide(idx);
            });
        });

        // Auto cambio cada 8 segundos
        setInterval(() => {
            showHeroSlide(heroIndex + 1);
        }, 8000);
    }

    // Exponer la función de inicialización
    window.pageScript = {
        init: function() {
            injectStyles();
            renderNovedades();
        }
    };
})();
