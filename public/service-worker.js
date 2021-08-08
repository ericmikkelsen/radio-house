const cacheName = 1;
const cacheFiles = [
    '/static/main.css',
    '/'
];

self.addEventListener('install', event => {
    console.log('[service-worker] installed');
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => {
                // caches all the files in cache files
                return cache.addAll(cacheFiles);
            })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys()
            .then(cacheNames => {
                return Promise.all(cacheNames.map(thisCacheName => {
                    // removes old files from previous service workers from the cache
                    return caches.delete(thisCacheName)
                }))
            })
    );
});

// https://web.dev/offline-cookbook/#stale-while-revalidate
self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.open(cacheName).then(function (cache) {
            return cache.match(event.request).then(function (response) {
                var fetchPromise = fetch(event.request).then(function (networkResponse) {
                    cache.put(event.request, networkResponse.clone());
                    return networkResponse;
                });
                return response || fetchPromise;
            });
        }),
    );
});
