/* ============================================================
 * 📱 Service Worker - PWA के लिए Offline Support (OPTIMIZED)
 * ============================================================ */

const CACHE_NAME = 'study-point-v2';
const CACHE_URLS = [
  './',
  './index.html',
  './tests.js',
  './manifest.json',
  './icons/icon-192x192.png',
  './icons/icon-192x192.svg',
  './icons/icon-512x512.png',
  './icons/icon-512x512.svg',
  'https://fonts.googleapis.com/css2?family=Outfit:wght@900&display=swap',
  'https://polyfill.io/v3/polyfill.min.js?features=es6',
  'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js',
  'https://cdn.jsdelivr.net/npm/chart.js'
];

/* ============================================================
 * 🔧 Install Event - Cache फाइलों को store करना
 * ============================================================ */
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing... Version 2');

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[Service Worker] Caching app shell');
        return cache.addAll(CACHE_URLS);
      })
      .catch((error) => {
        console.error('[Service Worker] Cache error:', error);
      })
  );

  // नया SW तुरंत activate हो जाए
  self.skipWaiting();
});

/* ============================================================
 * 🗑️ Activate Event - पुराने caches को delete करना
 * ============================================================ */
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activating...');

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[Service Worker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );

  // सभी clients को तुरंत control करना
  return self.clients.claim();
});

/* ============================================================
 * 🌐 Fetch Event - Hybrid Strategy (Cache + Network)
 * ============================================================ */
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // GET requests के लिए ही handle करो
  if (request.method !== 'GET') {
    return;
  }

  // CDN resources के लिए Network-First strategy
  if (url.origin !== location.origin) {
    event.respondWith(networkFirst(request));
    return;
  }

  // Local resources के लिए Cache-First strategy
  event.respondWith(cacheFirst(request));
});

/* ============================================================
 * ⚡ Cache-First Strategy - Local resources के लिए
 * ============================================================ */
async function cacheFirst(request) {
  try {
    const cached = await caches.match(request);
    if (cached) {
      console.log('[Service Worker] Serving from cache:', request.url);
      return cached;
    }

    const response = await fetch(request);

    if (response && response.status === 200) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }

    return response;
  } catch (error) {
    console.error('[Service Worker] Fetch error:', error);
    return new Response(
      'ऑफलाइन मोड में। कृपया इंटरनेट कनेक्शन जांचें।',
      { status: 503, statusText: 'Service Unavailable' }
    );
  }
}

/* ============================================================
 * 🔄 Network-First Strategy - External resources के लिए
 * ============================================================ */
async function networkFirst(request) {
  try {
    const response = await fetch(request);
    if (response && response.status === 200) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    console.log('[Service Worker] Network failed, using cache:', request.url);
    const cached = await caches.match(request);
    if (cached) {
      return cached;
    }
    throw error;
  }
}

/* ============================================================
 * 📢 Message Handling - Client से messages receive करना
 * ============================================================ */
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

console.log('[Service Worker] Loaded and ready - Version 2');
