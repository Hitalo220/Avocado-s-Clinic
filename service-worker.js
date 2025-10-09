self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("app-Avocado´s-Clinic-cache").then(cache => {
      return cache.addAll([
        "index.html",
        "manifest.json",
        "style.css",
        "icon-192.png",
        "icone-512.png",
        "service-worker.js",
        "Avocado_s_Clinic-removebg-preview.png",
        "bocaodonto.png",
        "cardiologia.png",
        "ChatGPT Image 4 de out. de 2025, 16_55_41.png",
        "dermatologia.png",
        "fundo-verde",
        "gineeuro.png",
        "neurologia.png",
        "olhoodonto.png",
        "ortopedia.png",
        "pediatria.png"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});

