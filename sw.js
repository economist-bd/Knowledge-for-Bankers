const CACHE_NAME = 'bankers-guide-v2';
const assets = [
  '/',
  '/index.html',
  '/content.js',
  'https://i.ibb.co/Lhbv2L6/cover.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(assets))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});

