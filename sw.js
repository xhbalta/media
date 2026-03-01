// sw.js
const CACHE_NAME = 'podcast-offline-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/404.html',
    '/app.js',
    '/db.js',
    '/manifest.json'
    // si hay CSS separado, agregarlo
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    // No interceptar peticiones a URLs externas (audio, imágenes) porque ya las manejamos con IndexedDB
    if (event.request.url.startsWith('http') && !event.request.url.includes(self.location.origin)) {
        return;
    }
    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request))
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => 
            Promise.all(keys.map(key => key !== CACHE_NAME && caches.delete(key)))
        )
    );
});
