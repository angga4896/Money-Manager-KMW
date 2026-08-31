self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // Biarkan fetch berjalan normal secara online/offline caching
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
