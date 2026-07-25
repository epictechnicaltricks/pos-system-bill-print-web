// Minimal service worker — enables "Add to Home screen / Install app" on Chrome.
// Upload this file to the SAME folder as pos.html on your host.
self.addEventListener('install', (e) => { self.skipWaiting(); });
self.addEventListener('activate', (e) => { self.clients.claim(); });
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
