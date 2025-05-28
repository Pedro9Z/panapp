const CACHE = 'panapp-v1';
const ASSETS = [
  './',                // index.html
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  // Agrega aquí CSS, JS y fuentes externas si las sirves localmente
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});
