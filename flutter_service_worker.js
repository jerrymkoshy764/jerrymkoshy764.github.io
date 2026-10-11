'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "37aa2238c516b7f6b8d2d50c95775562",
".git/config": "3ec4d55c7d3a6c719deb64020417d54b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "21cdd0133fd8998ae3ec2a809dac1de2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ee3fd0fe2145c956a8e6e86695e6e828",
".git/logs/refs/heads/main": "b36a5b1e1ee8865a10843c443cd952e2",
".git/logs/refs/remotes/origin/main": "058705ba5be287baadf7f5c190e966aa",
".git/objects/02/7b0503a2acda5f4f384b22849155138105d57f": "9269a62457ca9485f17f512666a65128",
".git/objects/05/d80a23e47fc9027a3dbec043850f8dcd170a4d": "6bc066d03cd088543005cca0ae063db4",
".git/objects/07/c5643e59bba522cc7b11857120955550514b90": "ef292ca166a3ebdc5b31979df66535ca",
".git/objects/0b/a1a3f901c277d5fa00599547a39caee392e6ce": "9630a7e43850c2ada33151fc8a443838",
".git/objects/0c/2ee5039531c9d487a75cc747e9eb2bdba5ba6f": "66a45a228fe1c13fbe84244b925594b9",
".git/objects/13/1fb886d74a638d04ab1b604715c0b39ce5db07": "1966719c852c6bf76b44bbe28825c8f6",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/32/08e5c45844a89cea801cb690fd0a69083a7ce7": "d2546df33ccd0c9206a651fac3d091fc",
".git/objects/38/45da04dc1c8a99c1baf10a74509e5e5f52c56e": "fffaca1b7b4e6c6224797397d0d4af32",
".git/objects/3d/df275c6001a428f5dc1a1404b578b6dd304257": "b027cd4e62bae7f6b6b3f2784c572bd6",
".git/objects/40/2b312f72f46e1e9898ec78c733dacb5046a057": "ca9ec3512130a01b847d117cd7a1cac5",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/51/5d6a69619aa702d4e6f4ac904f73329b8f5124": "cdc1d6db748b86df955d49bc84207faa",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/58/b919be2240055ec2d52cef73a46a3d0820e0f5": "074fa6f12ffcec1ca59ff045c2f0203a",
".git/objects/5d/7fd20e2ca29e930dde0e028f0841bade9b7d5f": "328284a52d9096457a9d2da9182ed799",
".git/objects/63/9fd505823c7cb1c66ff1c46c1fd6bf5e0d2ebb": "edec357c8098660cd85943b719317400",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/7c/4f5f7887758022f11d4adb8aa7f901d8ef9b33": "f1af3723894352c00be89ee40cf8028b",
".git/objects/7c/631b4e8a1cb69b2101f9f1661294399bc89ac3": "81d5bcabcee793372aa3ff949b39a54a",
".git/objects/7d/aba2e5b43768a1a4d61fe4f1a218ba9d35b9fe": "f1bf5b22519aace001580cebf9a89710",
".git/objects/7e/70cfb0f89610f0720e1488d602e7750299f35b": "208cf75553a560acd4e0a671e6d5f65b",
".git/objects/84/f272bafa870327ea1c01de0f5ebf3df6f9b57a": "5dbb2ae161148af54af13d7271b0a858",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/06a5f8e2e49ea71fd2f4d717dc419564bea3b6": "bed4ff464349e3cea482e1fa144bdcde",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/eaee6de5ca932e0fd2b0295f879571600169e1": "fd61599ed5e52f37477646577519a542",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/90/8d4aae85b484544c7552f9f5054cec000284a2": "96b8ccb28f7c2103c05103fb7e0fc126",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9e/e1919dc230d3433cce79d137c37081c974034a": "7918dcf5b15c1ac607255918935ca48a",
".git/objects/9f/71304d09a10f8c5f98360370c182dff2799f81": "9f10d1e83ff5e3247936ac38f431717e",
".git/objects/9f/ab7a3551d4e74640a620c18db36ff7f7dd4218": "616505c68aa44a353d7c73964309a4e1",
".git/objects/a3/baff380794a64a6b78509c12b640b4bcc62e5b": "b7b39759fd4227acdf61306d237c784b",
".git/objects/a6/44dd84014aaed14a8e7677f445ee09ecc02e98": "33820bc4d88b754b197946246ac356b0",
".git/objects/a6/4753aab1b043a089ec2cdae7f91359d1b111d1": "f0c8be3f0f03bec10ddff1954d983105",
".git/objects/aa/04f92a568ca349673de82d2b5a9fbd823524b8": "77908fe6a5a8b55e2fea1c3b1c407548",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/8743dc44b7c41f0682da3f86196d43d9968a21": "e10bc8bc11a1d40a31e2427bbd193fef",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/bd/7c220360aae45dcc0a85a53b3109786648cddd": "27577e6a1f61e53fca674dd68f124a9e",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/ce/c64447ba0a77d6fc69b410b700ee52203d3ad1": "94b1d658ca859a158c5ff2ef88c9bab3",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/de/4d5ab7fe246a8edc4e84daf45f398273a79c95": "0ca46b5f0c56f3e123ca0747fb0d9b44",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/bc745aafffb5769b6d8afac0e958ca59663c18": "ab9edd108247d21e4bb4d7ef54d42fb5",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/2c981374b0548d515b61d87c856ec5b67044dc": "56602b5139c50a213c88eceb6a6d5fb6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/aa8324e1dbdfb62a566763fe1f7638ec909aac": "d8bff951e2731ee63127e091016b8cef",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/refs/heads/main": "cc1b9e291aceb909d2d2dd954341d183",
".git/refs/remotes/origin/main": "cc1b9e291aceb909d2d2dd954341d183",
"assets/AssetManifest.bin": "1ce272db86d752422688aab20e746776",
"assets/AssetManifest.bin.json": "85d455455a57dcffa6a60d58bbcbb0c8",
"assets/AssetManifest.json": "7d29602b59ee893ebafba1ac18ac2ce7",
"assets/assets/images/agriculture.png": "16e4c829211c52d3eefa735b80163548",
"assets/assets/images/androidstudio.png": "60cd295b1b8759a0558bd48c83d648af",
"assets/assets/images/dart.png": "646d2b5ffd55a8c7f2bb2c5752a5e23d",
"assets/assets/images/figma.png": "b4e80f638b17cc96474f3680ee07f970",
"assets/assets/images/firebase.png": "6bf83af1bce762e2cea64c3d8911a215",
"assets/assets/images/flutter.png": "8bb2cde1291abdb1df279443530ddb3d",
"assets/assets/images/flutterflow.png": "69811a13743f64bf09e47a24316b8f28",
"assets/assets/images/github.png": "1b9b9f71269e504156ce9d89a00f2551",
"assets/assets/images/jerryimg.png": "0b679967f932bcdf0005d4b166efa333",
"assets/assets/images/JMKsymbol.png": "626a3b4ad4f4d587a5021c58d034f3b3",
"assets/assets/images/realbuild.png": "8c9d045795c6cbcc1180ac425d21c571",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "f8f5fe0818f3af37734ae18f8536dd7d",
"assets/NOTICES": "6d9f374b55676b290d5728b9443680f6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "884d902dfa47e0f1e5b09d33009a6d33",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "262525e2081311609d1fdab966c82bfc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ab22d7351e9fcab83707dd6eee1001ab",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "e1cdd5f293e4cd253df8461e0a184986",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "cf1938d4546177a9ee7ef8c0d173b586",
"/": "cf1938d4546177a9ee7ef8c0d173b586",
"main.dart.js": "c07475b4c4d682840a29e8a957333e23",
"manifest.json": "362429984ba1f192439f29e86ebb1530",
"version.json": "309b72831ccf035b50b556d3533a05db"};
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
