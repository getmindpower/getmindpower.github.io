'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "121c4cde4aa96c4538b5b77b7d06000c",
"splash/img/light-2x.png": "a7c35771e19913f04f53827b154200d0",
"splash/img/dark-4x.png": "e74bf5f5b3c8fba5eb17857331e05d27",
"splash/img/light-3x.png": "a32a26188063c268722873aa2f971e51",
"splash/img/dark-3x.png": "a32a26188063c268722873aa2f971e51",
"splash/img/light-4x.png": "e74bf5f5b3c8fba5eb17857331e05d27",
"splash/img/dark-2x.png": "a7c35771e19913f04f53827b154200d0",
"splash/img/dark-1x.png": "df6269953b7f1317c002403f6caf141e",
"splash/img/light-1x.png": "df6269953b7f1317c002403f6caf141e",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "c94c38ff00a9d487c353a2d78989ea08",
"index.html": "7b5f2ae6ac4e8bcec981c72d32f2f281",
"/": "7b5f2ae6ac4e8bcec981c72d32f2f281",
"main.dart.js": "9643a59beeac9f9ae0809ff5f68c249f",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4e42b3dbc8fe6d791b670c7a4d2546b3",
"assets/AssetManifest.json": "28bce4b13fdc514d2c17ff0e2ac2ebeb",
"assets/NOTICES": "1c51e0648f921a29f4824898716ede45",
"assets/FontManifest.json": "8b74101b6775dcfe9639ea6598375c03",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/mp_logo.png": "4b473619bdd323ea4dd65a54fbbfe7a7",
"assets/assets/images/mindful.png": "666a2945b5767440589c13c6a14298e2",
"assets/assets/images/loading_image.png": "191f208733377770b229f7c4b6ee8e67",
"assets/assets/images/bg.png": "954b833726a3a0c363d5edc75532e246",
"assets/assets/icons/email.png": "d58ab0de1234604cb9077ec434eff294",
"assets/assets/icons/shopee.png": "56165010b4dd8459fd4ebef01008c2e2",
"assets/assets/icons/instagram.png": "c30131f93e6039a335cc9fd9f13c41e6",
"assets/assets/icons/tokopedia.png": "383d94a2ae47ba3b48ea2b808044f55e",
"assets/assets/icons/tiktok.png": "22b167514bfd916a3671e289c45f8aed",
"assets/assets/icons/petik.png": "b5bf65c8cc8accff76e0c2775fc55fd8",
"assets/assets/icons/whatsapp.png": "90a1bcc412e72a80d64da10e386b2deb",
"assets/assets/fonts/Montserrat/Montserrat-LightItalic.ttf": "c54486c33610a1fca147afc18af3034f",
"assets/assets/fonts/Montserrat/Montserrat-Medium.ttf": "bdb7ba651b7bdcda6ce527b3b6705334",
"assets/assets/fonts/Montserrat/Montserrat-BoldItalic.ttf": "a49032b6a945b021303f16b664f87e6c",
"assets/assets/fonts/Montserrat/Montserrat-Light.ttf": "94fbe93542f684134cad1d775947ca92",
"assets/assets/fonts/Montserrat/Montserrat-ThinItalic.ttf": "ff9c45e92d16324b8964447d12d1f458",
"assets/assets/fonts/Montserrat/Montserrat-ExtraLight.ttf": "a7fe50578d9aa3966c925cb9722db03a",
"assets/assets/fonts/Montserrat/Montserrat-Thin.ttf": "b3638b16904211d1d24d04ce53810c4d",
"assets/assets/fonts/Montserrat/Montserrat-Bold.ttf": "ed86af2ed5bbaf879e9f2ec2e2eac929",
"assets/assets/fonts/Montserrat/Montserrat-MediumItalic.ttf": "2ed625fc9f039d801a5aab9b6f9cd8ef",
"assets/assets/fonts/Montserrat/Montserrat-BlackItalic.ttf": "a67f4df02f4d73bb8bfd5bff421e4d1f",
"assets/assets/fonts/Montserrat/Montserrat-SemiBold.ttf": "cc10461cb5e0a6f2621c7179f4d6de17",
"assets/assets/fonts/Montserrat/Montserrat-ExtraLightItalic.ttf": "9c3e2f21cc8fba26dc3da67e89a9365d",
"assets/assets/fonts/Montserrat/Montserrat-ExtraBold.ttf": "9e07cac927a9b4d955e2138bf6136d6a",
"assets/assets/fonts/Montserrat/Montserrat-Black.ttf": "cce7ff8c1d7999f907b6760fbe75d99d",
"assets/assets/fonts/Montserrat/Montserrat-Regular.ttf": "5e077c15f6e1d334dd4e9be62b28ac75",
"assets/assets/fonts/Montserrat/Montserrat-Italic.ttf": "cc53ad8bb1c801746c831bb7ce493f74",
"assets/assets/fonts/Montserrat/Montserrat-SemiBoldItalic.ttf": "75c4176c64611f32faf01a5de7631877",
"assets/assets/fonts/Montserrat/Montserrat-ExtraBoldItalic.ttf": "8a4a6844448e210672d54f8b32932ee9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
