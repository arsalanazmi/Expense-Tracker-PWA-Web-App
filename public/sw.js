var CACHE_NAME = "web";
var urlsToCache = [
  "/static/js/bundle.js",
  "/static/js/main.chunk.js",
  "/static/js/0.chunk.js",
  "/static/js/1.chunk.js",
  "/manifest.json",
  "/index.html",
  "/Logo.png",
  "/logo192.png",
  "/static/media/Background-Image.b29e66fb.jpg",
  "/static/media/fontawesome-webfont.af7ae505.woff2",
  "/static/media/fontawesome-webfont.fee66e71.woff",
  "/static/media/fontawesome-webfont.b06871f2.ttf",
  "/",
];

self.addEventListener("install", function (event) {
  // Perform install steps
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(function (cache) {
        console.log("Opened cache");
        return cache.addAll(urlsToCache);
      })
      .catch((err) => {
        console.log(err);
      })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      // Cache hit - return response
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});
