const CACHE_NAME = 'balta-media-v1';
const OFFLINE_URL = '/offline.html';

// Archivos que se cachean al instalar (solo lo esencial, no episodios)
const PRECACHE_ASSETS = [
  '/',
  '/offline.html',
  'https://cdn.tailwindcss.com',
  'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800&display=swap'
];

// Instalación: cachear el shell offline
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activación: limpiar caches viejos
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))
    ).then(() => self.clients.claim())
  );
});

// Estrategia: network-first para navegaciones, fallback a offline
self.addEventListener('fetch', event => {
  // Solo manejar navegaciones (documentos)
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .catch(() => caches.match(OFFLINE_URL))
    );
    return;
  }

  // Para recursos estáticos (imágenes, CSS, JS) podríamos cachear, pero lo dejamos simple
  // Aquí no cacheamos episodios ni datos dinámicos
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
