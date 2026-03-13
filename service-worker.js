self.addEventListener('install', event => {
  console.log('Service worker installed');
});

self.addEventListener('fetch', event => {
  // minimal fetch handler
  event.respondWith(fetch(event.request));
});