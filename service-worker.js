const CACHE_NAME = 'tota-cart-shell-v1';
const APP_SHELL = [
  './',
  './index.html',
  './styles.css',
  './script.js',
  './products.json',
  './manifest.webmanifest',
  './app-icon.svg',
  './app-icon-192.png',
  './app-icon-512.png'
];

function appUrl(path) {
  return new URL(path, self.registration.scope).href;
}

function cacheResponse(request, response, cacheKey = request) {
  if (!response.ok) return Promise.resolve(response);
  const copy = response.clone();
  return caches.open(CACHE_NAME)
    .then(cache => cache.put(cacheKey, copy))
    .then(() => response);
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL.map(appUrl)))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then(cacheNames => Promise.all(
        cacheNames
          .filter(cacheName => cacheName.startsWith('tota-cart-') && cacheName !== CACHE_NAME)
          .map(cacheName => caches.delete(cacheName))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);

  if (request.method !== 'GET' || url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then(response => cacheResponse(request, response, appUrl('./index.html')))
        .catch(async () => {
          const cachedPage = await caches.match(appUrl('./index.html'));
          if (cachedPage) return cachedPage;
          return Response.error();
        })
    );
    return;
  }

  if (url.pathname === new URL('./api/products', self.registration.scope).pathname) {
    event.respondWith(
      fetch(request)
        .then(response => {
          if (!response.ok) throw new Error(`Product API returned ${response.status}`);
          return cacheResponse(request, response);
        })
        .catch(async () => {
          const cachedProducts = await caches.match(request);
          if (cachedProducts) return cachedProducts;
          return Response.error();
        })
    );
    return;
  }

  if (url.pathname === new URL('./products.json', self.registration.scope).pathname) {
    event.respondWith(
      fetch(request, { cache: 'no-cache' })
        .then(response => {
          if (!response.ok) throw new Error(`Product catalog returned ${response.status}`);
          return cacheResponse(request, response);
        })
        .catch(async () => {
          const cachedProducts = await caches.match(request);
          if (cachedProducts) return cachedProducts;
          return Response.error();
        })
    );
    return;
  }

  if (url.pathname.startsWith(new URL('./products/', self.registration.scope).pathname)) {
    event.respondWith(
      caches.match(request)
        .then(cached => cached || fetch(request).then(response => {
          return cacheResponse(request, response);
        }))
    );
    return;
  }

  if (APP_SHELL.some(path => new URL(path, self.registration.scope).pathname === url.pathname)) {
    event.respondWith(
      caches.match(request, { ignoreSearch: true })
        .then(cached => cached || fetch(request).then(response => {
          return cacheResponse(request, response);
        }))
    );
  }
});
