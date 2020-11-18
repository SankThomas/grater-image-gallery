// Check if the browser supports serviceWorkers
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('sw.js', { scope: './' })
    .then((reg) => {
      console.log(`Registration successful. ${reg.scope}`)
    })
    .catch((error) => {
      console.log(`Registration unsuccessful with ${error}`)
    })
}

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        './',
        './css/style.min.css',
        './images/bike.jpg',
        './images/old-instagram-logo.jpg',
        './images/blue-car.jpg',
        './images/antiquities-store.jpg',
        './images/cassette-collection.jpg',
        './images/phone.jpg',
        './js/main.js',
        './index.html',
        './login.html',
        './signup.html',
        './manifest.json',
        './sw.js'
      ])
    })
  )
})

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((resp) => {
      // Get from network if unavailable in cache, and save to cache for later
      return (
        resp ||
        fetch(e.request).then((response) => {
          return caches
            .open('v1')
            .then((cache) => {
              cache.put(e.request, response.clone())
              return response
            })
            .catch(() => {
              return caches.match('/dist/offline.html')
            })
        })
      )
    })
  )
})

/*
Add this block when you want to update serviceWorkers
E.g when you have new resources to cache, and you need to delete the old serviceWorker once the process is done. Notice the change in version number to 'v2'


self.addEventListener('activate', (event) => {
  var cacheKeeplist = ['v2'];

  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (cacheKeeplist.indexOf(key) === -1) {
          return caches.delete(key);
        }
      }));
    })
  );
});

*/
