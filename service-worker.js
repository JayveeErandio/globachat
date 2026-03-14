self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('my-cache').then(cache => {
      return cache.addAll([
        './',
		'./index.html',
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request));
});
