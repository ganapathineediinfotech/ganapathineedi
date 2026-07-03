'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "237a493dbc1998a139debc88fe83ff1b",
"version.json": "13261de90a767198592f8c1be9236545",
"index.html": "94af66618254f0bf0c9de047f1b58951",
"/": "94af66618254f0bf0c9de047f1b58951",
"main.dart.js": "f9580875d405c75606dc7f4e12b24714",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a0c56e38a32de711d0fb16f9eb7ce648",
"assets/AssetManifest.json": "eb983b0e9aaafed68a677efa420d777c",
"assets/NOTICES": "9349b46d2c52cf9cb93b393d6777623e",
"assets/FontManifest.json": "c75f7af11fb9919e042ad2ee704db319",
"assets/AssetManifest.bin.json": "174da62240d9bf994f6599f2db566570",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Regular-400.otf": "46be639d952abe98effde36da35e7701",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Brands-Regular-400.otf": "706b13a761d261d759c0a8d557ccfdcb",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Solid-900.otf": "48b92e8451309fdcb73d294f0f6e9830",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "cc61e4440401a30ab309479d44fe88d6",
"assets/fonts/MaterialIcons-Regular.otf": "572067300e7565894bbce11632d85add",
"assets/assets/officeimages/three.jpeg": "733c14c22f5a811edf7e58870b12c831",
"assets/assets/officeimages/six.webp": "f39018aeeabb00f3b8818400a74ad09c",
"assets/assets/officeimages/one.jpeg": "2919d0621b11e5fa9cec20320b753001",
"assets/assets/officeimages/five.jpeg": "e1a6630e117a73b76e89b3a86c8ced99",
"assets/assets/officeimages/contact.png": "4ca71330b53ed218ebed8478afd6eb74",
"assets/assets/officeimages/four.jpeg": "62e9443ff6cde26e07e264e2362bb21e",
"assets/assets/officeimages/two.jpeg": "0c060493e63556c2c87f57ac20986d8d",
"assets/assets/contact/group.png": "4766ce74959c264d2fd1739a04645cfe",
"assets/assets/contact/inperson.png": "98dfb9bd13232d7e92780b2bb6f56ae0",
"assets/assets/course/datascience.png": "ff812942bf82f0a0daeb84597180bf73",
"assets/assets/course/python.png": "8fd98fcd5d6ce39bcb87f8e948ee6d3e",
"assets/assets/course/flutter.png": "39fb47583264f3c3c354e17f3245386b",
"assets/assets/course/java.png": "611c91f993c15aa64011aefeeebb9917",
"assets/assets/course/net.png": "cfa3f55494b49de14df49722d252d385",
"assets/assets/course/react.png": "f569773dad2e146c9566cc6bd4353830",
"assets/assets/course/php.png": "ea2896c5487489bd97495eb69bdda83d",
"assets/assets/course/mern.png": "6f4bcc253473080dd5d8cb130db7f7ad",
"assets/assets/course/ai.png": "bb15824aa90f70f9e446911c0b5bc93c",
"assets/assets/roadmap/roadmap.png": "06dddd79f5bb171510e6683885611fe4",
"assets/assets/roadmap/three.png": "412bc004f820c443062a19b0cf965154",
"assets/assets/roadmap/six.png": "b261f4618dd609173f8857de4d0fb56b",
"assets/assets/roadmap/two.png": "24bfb015b50364113508dbac10795743",
"assets/assets/roadmap/four.png": "1f4c827329f78536b1b8a5d75dd1f12e",
"assets/assets/roadmap/eight.png": "b7b74b0706ceba3f361638c8c01a201e",
"assets/assets/roadmap/five.png": "90afc630589e481895e84b874ac282fb",
"assets/assets/roadmap/one.png": "9c4d5a958df02934bd45b06dea975b29",
"assets/assets/roadmap/seven.png": "a5e28ace021ca12fc56bca54e4ab38af",
"assets/assets/roadmap/nine.png": "069c4ee689d3f18d5a8310dcc99dba71",
"assets/assets/roadmap/roadmapnew.png": "22e66ec0765f61ec59c1ae4782c68a4e",
"assets/assets/images/bannerthree.png": "e9442d71d2d55ab2c75f17082cc086dc",
"assets/assets/images/bannersix.png": "fe6a61151d510812afe2cca2b6ea7a67",
"assets/assets/images/bannertwo.jpg": "d61a038ed66af89ce37bb3b8905bbc7c",
"assets/assets/images/cmplogo.png": "00e6eb55fc35dc70c3d591c876511c51",
"assets/assets/images/bannerfour.png": "877b3af2af2d2618d6e12d94b2598091",
"assets/assets/images/vaji.png": "40c4ac5994f5732f4cdb334fc7308525",
"assets/assets/images/technologies.png": "1a648a6a2a155c0582e31fbd7d612ab5",
"assets/assets/images/contactbg.png": "37b5c61f5fa17e30e957e0a7fb4b71ea",
"assets/assets/images/vajione.png": "b142a2e4959fd47e1ae5ca834d398eb9",
"assets/assets/images/lady.png": "be3d6805fe4f3d99fd3e683551afb894",
"assets/assets/images/bgimgold.png": "b527e2b95959bd0d0d0e6ee2d1d89050",
"assets/assets/images/bannerfive.png": "b7af40f696770726a6fe90705c007d7e",
"assets/assets/images/finallogo.png": "c4bd7d3d106f60f8b4f9460c4903593b",
"assets/assets/images/bannerseven.png": "32711b7adbd36d22096f3ec94af2f6bf",
"assets/assets/images/boy.png": "6fa3c8e1da8151ccfb4fc9640ccb1b2a",
"assets/assets/images/cardbg.png": "94ed1bb1f1f9eb1ea54b58cac887b0a2",
"assets/assets/images/ganapathineedi.png": "f5246050a839d19bbfebbbe583070c4e",
"assets/assets/images/bannerone.png": "d1b200a735c704b0dc0d36fd2222ad05",
"assets/assets/social/x.png": "a4722b45d74dda96411e9260bd2d57ec",
"assets/assets/social/fb.png": "19fe188e82d3071649189e6b83ae76eb",
"assets/assets/social/twitter.png": "80df912466e01672d926a19ba3f37f99",
"assets/assets/social/insta.png": "b2d98f4f3b7b8a0df5074958d7873a65",
"assets/assets/social/linkedin.png": "0c21d4287e197323b96ab47e138a8517",
"assets/assets/social/whatsup.png": "d5524edf78a9abc806fff30dd67915f7",
"assets/assets/videos/finalvideo.mp4": "25671e4812d3e8d608a94244b8a4da4c",
"assets/assets/directors/ceo.png": "d8aeafffd8861d07a1527543cdb90ac9",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
