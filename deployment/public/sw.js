// Service Worker for GoldsBet
const CACHE_NAME = 'goldsbet-v3.1.0';
const STATIC_CACHE_NAME = 'goldsbet-static-v3.1.0';
const DYNAMIC_CACHE_NAME = 'goldsbet-dynamic-v3.1.0';

// Static assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/about',
  '/contact',
  '/privacy',
  '/disclaimer',
  '/GoldsBet Logo.webp',
  '/goldsbet pakistan.webp',
  '/Golds%20bet.webp',
  '/Goldsbet%20Game%20Pakistan.webp',
  '/Goldsbet%20pk.webp',
  '/site.webmanifest',
  '/favicon.ico'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing v3.1.0...');
  event.waitUntil(
    // Clear all old caches first
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName.startsWith('goldsbet-')) {
            console.log('Service Worker: Deleting old cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      return caches.open(STATIC_CACHE_NAME);
    })
      .then((cache) => {
        console.log('Service Worker: Caching static assets');
        // Cache assets individually to handle failures gracefully
        return Promise.allSettled(
          STATIC_ASSETS.map(asset => 
            cache.add(asset).catch(error => {
              // Silently continue with other assets
              return null;
            })
          )
        ).then(() => {
          return Promise.resolve();
        });
      })
      .then(() => {
        console.log('Service Worker: Installation complete');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('Service Worker: Installation failed', error);
        return self.skipWaiting();
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE_NAME && cacheName !== DYNAMIC_CACHE_NAME) {
              console.log('Service Worker: Deleting old cache', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Service Worker: Activation complete');
        return self.clients.claim();
      })
  );
});

// Fetch event - serve from cache or network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip chrome-extension and other non-http requests
  if (!url.protocol.startsWith('http')) {
    return;
  }

  // Skip .html.txt requests that cause 404 errors
  if (url.pathname.endsWith('.html.txt')) {
    return;
  }

  // Skip requests with _rsc parameter (Next.js internal)
  if (url.searchParams.has('_rsc')) {
    return;
  }

  // Skip requests to non-existent paths
  if (url.pathname.includes('.txt') && !url.pathname.endsWith('robots.txt')) {
    return;
  }

  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        // Return cached version if available
        if (cachedResponse) {
          return cachedResponse;
        }

        // Otherwise fetch from network
        return fetch(request)
          .then((response) => {
            // Don't cache non-successful responses
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response
            const responseToCache = response.clone();

            // Cache dynamic content
            caches.open(DYNAMIC_CACHE_NAME)
              .then((cache) => {
                cache.put(request, responseToCache);
              })
              .catch(() => {
                // Silently handle cache errors
              });

            return response;
          })
          .catch((error) => {
            // Return offline page for navigation requests
            if (request.destination === 'document') {
              return caches.match('/');
            }
            
            // For other requests, return a basic response instead of throwing
            return new Response('', { status: 404 });
          });
      })
  );
});

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  console.log('Service Worker: Background sync', event.tag);
  
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // Handle background sync tasks
      Promise.resolve()
    );
  }
});

// Push notifications (if needed in future)
self.addEventListener('push', (event) => {
  console.log('Service Worker: Push notification received');
  
  const options = {
    body: event.data ? event.data.text() : 'New update available!',
    icon: '/GoldsBet Logo.webp',
    badge: '/GoldsBet Logo.webp',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Explore',
        icon: '/GoldsBet Logo.webp'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/GoldsBet Logo.webp'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('GoldsBet', options)
  );
});

// Notification click handler
self.addEventListener('notificationclick', (event) => {
  console.log('Service Worker: Notification clicked');
  
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});
