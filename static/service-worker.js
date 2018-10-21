const cacheName = 1;
const cacheFiles = [
    '/static/main.css',
    '/'
];

self.addEventListener( 'install', event => {
    console.log('[service-worker] installed');
    event.waitUntil(
        caches.open( cacheName )
        .then( cache => {
            // caches all the files in cache files
            return cache.addAll( cacheFiles );
        })
    );
} );

self.addEventListener( 'activate', event => {
    event.waitUntil(
        caches.keys()
        .then( cacheNames => {
            return Promise.all( cacheNames.map( thisCacheName => {
                // removes old files from previous service workers from the cache
                return caches.delete( thisCacheName )
            } ) )
        } )
    );
} );

self.addEventListener( 'fetch', event => {
    event.respondWith(
        caches.match( event.request )
        .then( response => {
            console.log('[service-worker] fetched: ', event.request);
            // if the response exists in cache, just send the cached version
            if ( response ) { return response; }

            // if it doesn't go get it.
            const requestClone = event.request.clone();
            fetch( requestClone )
            .then( response => {
                if ( !response ) {
                    return response;
                } else {
                    const responseClone = response.clone();
                    caches.open( cacheName )
                    .then( cache => {
                        cache.put( event.request, responseClone );
                        return response;
                    } )
                }
            } )
            .catch( error => {
                console.error( '[service-worker] ', error );
            } )

        } )
    );
} );
