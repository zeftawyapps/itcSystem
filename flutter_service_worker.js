'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "0a2a362a53b59e2bc742a408e3aab7b5",
"assets/AssetManifest.bin.json": "75f718711ccab0e35846b2f49cf67ac8",
"assets/AssetManifest.json": "b9cef4193275716f51ce4a95880f6759",
"assets/assets/audio/casher.mp3": "c4d9885b80e4103fd5b493f0c90aa34e",
"assets/assets/audio/click.mp3": "e5a81d8e2f80b6ba280a6144eac1f3ce",
"assets/assets/audio/click2.wav": "c91db761881f46d1cf78e67271f095ec",
"assets/assets/audio/click3.wav": "622d510e6cb7fe7403c3e1b8e86bc1de",
"assets/assets/audio/click4.mp3": "cbd1fc2cb7c80e738d3c830811409e42",
"assets/assets/audio/currect.mp3": "5ad718a77a39515c556d52700069432d",
"assets/assets/audio/gamiover.mp3": "7bc5d64d4891e9a889ea742bb649d369",
"assets/assets/audio/getmony.mp3": "afa112736305128e0b7e82ac3e520c2c",
"assets/assets/audio/getreword.mp3": "1768de81fa3eef9da9ce4aedc029bc69",
"assets/assets/audio/h2andrer.mp3": "97e7e3568bdbc19c168af81b7138f660",
"assets/assets/audio/haddnow.wav": "c4315f17392c69084799cbc45ccfee12",
"assets/assets/audio/haddtime.mp3": "8e9b7d9b7ef2da144a14776b083881f2",
"assets/assets/audio/hcurrect.mp3": "9154a4d0d1af474451c19e85a3b80208",
"assets/assets/audio/islandclick.mp3": "224bd5f9967fb854d591f4b0fd830285",
"assets/assets/audio/newGame.mp3": "722b94346c985ace2f9f1ca6c8a6690d",
"assets/assets/audio/newisland.MP3": "c3cad7f7a29a503aee1d08f01554cc53",
"assets/assets/audio/openisland.mp3": "224bd5f9967fb854d591f4b0fd830285",
"assets/assets/audio/startgame.mp3": "42a386dddde9d14c607500303bd51cc0",
"assets/assets/audio/win.mp3": "1768de81fa3eef9da9ce4aedc029bc69",
"assets/assets/audio/wingame.mp3": "d26272bb4b108eddf9b21b8770b9c895",
"assets/assets/audio/wrong.mp3": "b9cfeca941103f11611101c7046c78de",
"assets/assets/doc/privacy.pdf": "e853b3c5c905fae871054da9484702df",
"assets/assets/fonts/ArbFONTS-77KacstQurn.ttf": "0b8cfa9c5f1f13e62a4bb5be3dd1c2e9",
"assets/assets/fonts/ArbFONTS-KacstQurn.ttf": "0b8cfa9c5f1f13e62a4bb5be3dd1c2e9",
"assets/assets/fonts/DMSans-Regular.ttf": "3e7f038b85daa739336e4a3476c687f2",
"assets/assets/fonts/GE%2520SS%2520Two%2520Medium.otf": "db409ed6c63285382676396dc4385f64",
"assets/assets/fonts/helveticaneueLTarabic.ttf": "6520991c7cb2c4abe7b95e0373935669",
"assets/assets/fonts/helveticaneueLTarabiclight.ttf": "335c6f202e273a6194f507cc1a996ad2",
"assets/assets/fonts/me_quran%2520Regular.ttf": "30e3dd63fe25c46a7d4107384aabfc3d",
"assets/assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/fonts/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/fonts/ScheherazadeNew-Bold.ttf": "9a07dfbb72f19af9d90a8851ae650612",
"assets/assets/fonts/ScheherazadeNew-Regular.ttf": "8fa250d2c273a5c2429ff3bebd873d52",
"assets/assets/iconsbyftt/Rashada.ttf": "d2d73fb1ab3445f0b853a96519b60790",
"assets/assets/iconsbyftt/Rashada2.ttf": "c4514d2df35914d48d0f8dc40d3cf88b",
"assets/assets/iconsbyftt/signup.ttf": "e984681731bdcee4b2fc93f7def43328",
"assets/assets/iconsbyftt/Whatsapp.ttf": "fc1c7e0d647705f94a5d9e56a37963ea",
"assets/assets/img/applogo.png": "1a625504cca8cb2454f9f24e901d6eeb",
"assets/assets/img/cpBG.png": "3c14f5ed9a41c2e4afc59ad2452eb905",
"assets/assets/img/dep.jpg": "3f97c149f97f809c8d55bc6e1c79d971",
"assets/assets/img/empty.png": "3ade730f3ecf6fa4f7cf3132c4b3a76b",
"assets/assets/img/logo.png": "c6a8fc2a75ccd5fd112b70feed1f0ee9",
"assets/assets/img/logo2.png": "4bf4732377c7445ed5f760a3b12dd678",
"assets/assets/img/profile.png": "b17f563afb5568957649148a813841c1",
"assets/assets/img/uploadIcon.png": "91504a97c1557a3f22e5578f084d8d8e",
"assets/assets/json/pay.json": "ae1464b80707185544536a28308f27ac",
"assets/assets/json_config/base_url_config.json": "fa01c1c8056e66c5a6f2fc76d5e3807f",
"assets/assets/json_config/firebase_config.json": "263133fd536e2b5712080aa7a5619490",
"assets/assets/svg/quran.svg": "7dbb1631700d7f0febd308b3493419f5",
"assets/assets/svg/svg%2520-%2520Shortcut.lnk": "2827f4acbd210d70f50090a7b3eda5b6",
"assets/FontManifest.json": "1ee221a9910dfe463cd991a148a87590",
"assets/fonts/MaterialIcons-Regular.otf": "0e98f3206ad7d832d4ecea3d85271d12",
"assets/NOTICES": "aa82f5d64bf5824822722b020bd1fa46",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"build/index.html": "383f583cd97dcd80426442abcd359339",
"/": "9c3ee2de44d2bbda1199b7175f83a1c7",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/logo.png": "c6a8fc2a75ccd5fd112b70feed1f0ee9",
"index.html": "9c3ee2de44d2bbda1199b7175f83a1c7",
"logo.png": "c6a8fc2a75ccd5fd112b70feed1f0ee9",
"main.dart.js": "8635233637cc4652da5249e030a0dd35",
"manifest.json": "e5f283cb83f8512ef6a2e9e2cf7c6aef",
"version.json": "48a3b30df08e3b4b9504ad2e72c660f6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
