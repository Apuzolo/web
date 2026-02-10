'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "4f98f59e877ecb84ff75ef0fab45bac5",
".git/config": "0ef5778274dd92de7c8f9c69da14e744",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "e6237c649e594b26712781baadbb5039",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "30e60398466c46f5e722906223f5734f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e5884f996ef70f49946ca7fadfa0d8c9",
".git/logs/refs/heads/gh-pages": "5f895a53df501b2ed28774337bebaa48",
".git/logs/refs/heads/main": "a7550a628733263ff8230746101a1c24",
".git/logs/refs/remotes/origin/gh-pages": "c69ef41a4e08a5c9be4cb3b590af5ead",
".git/logs/refs/remotes/origin/HEAD": "d5932c65f11b65aad6fd6003b91470a3",
".git/logs/refs/remotes/origin/main": "2e809eb1423a86ed3ff6f0acb121d040",
".git/objects/01/32427febb09b0cc95b6501c3bb75ec560ee8bc": "1b34c38d990506d5f089aa93e186882e",
".git/objects/01/a7f67ffdfa9280940b804405e6dfd034d18db8": "86f8644be4f2f205b7c102b65d757911",
".git/objects/02/e35a497135886f1d3dca6fd0ca98ea0cdc76b8": "d6e4526b89af10755ebaa2ee2eaf3d70",
".git/objects/07/00109ef8f3fc0fd90af4db2dda885906711eeb": "85e63cff8fb04671a2e749f32579b00c",
".git/objects/07/148022dafc413af5ed129fa13dcfc7e18905a5": "c9d2c638c9596dd20c7b8c3532f9d7c8",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/11/9ffb520ad64588dad8f95901a78bc2a91d8a1c": "2f273d13cd2613072c6950e162937fc0",
".git/objects/13/c49ca44d25f9a40ce989df47565c79d041e8c0": "3b261a1fa44fdf828d94d6f59dcfe66b",
".git/objects/17/817c0cd607bbea2d39e37b6a2819ec06aa0e48": "778d696f53c03ea7c42185a195c85fea",
".git/objects/18/17ddafa782f05b18761d60921e16d1cf40f005": "9ec1a2761c39b0699dbc7d56acf628ce",
".git/objects/19/a96c5cd9c63f494575e91d4cbc6a251bdc9ee6": "a96e5af28ac3be0dc6ec1e9bab082c00",
".git/objects/31/4ce07ad3b8f4ab5a14522318c2762e45e87f90": "01921041ea0cda4949a09b85abceb3f8",
".git/objects/34/c2bb62a4bd439d85cd34b538d36293fae295e3": "9a727ff217077f9905c7bec4e83cb910",
".git/objects/39/e82f0974db62d97d4a7e8ba72696cc54819d1f": "43a83d13c181277b50c8f20072a57791",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3c/6c5dabe6f4cafd79cd298542456d0db7a52ada": "a07420a305785604de97ac2f58d45a8e",
".git/objects/3d/691aa28b26b07c5f3adf8b474d27c5babb57fc": "98bbcd0da89d5d7b8861ca37c21fa18a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/9c91356de48dfe100f95c470e2862e5963a25a": "1066b65bf6f3097f18d9ba4e326abfbd",
".git/objects/47/880dbc30b2b63ea7bcc59c84be9938c37da484": "b5d596ee8c696e16c63aa84e08c3bf92",
".git/objects/48/98b7ca48f68e30a2bd27d338d6781ce18682dc": "6bda162d9dad39d49e50ebe3a1a29e01",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/56/0ae19e25ac88cd79a3327e4d907b9df8c642b1": "e222c6b4d0f4650b1a038d2de293bbcf",
".git/objects/5e/f76b6301a75c0bc1dea6d83f5a50d5ccb35b16": "127dab8aed18760b99ed9b7d0cf1c7a6",
".git/objects/61/76f7b4c1622218a3f4bcc5542b0a0c526131e8": "5003fa124a94a12b268e56224a75f893",
".git/objects/66/65327cf1c215c6876858134e61e49d6c2b1e17": "64a42abb966fd9bdbd83d0708fed2f5c",
".git/objects/66/804e8ef404d09a68559f752631310d21dc5e69": "98f8674138bc22f4df7feb9086070a1a",
".git/objects/66/f33b79f781a5512b636fd7ecc7bc2a9ad613c1": "eda0b2d4a6386055b66bcfc6cd2d4a08",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/48ae150b3bcae1b6075e1f77aa820df8cfddba": "9b6604fa8efaa8f0878a55a3df53fc0a",
".git/objects/6c/aa8753ceb073e61876f88d499c1a5fc29997c9": "78d721f7b80b57e1d1d1b0f2e53cbf67",
".git/objects/6d/79c381423edbacd672c49ad2bdc435b42ab053": "decf583861014abed20a86334c3cd86c",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/77/08cdc9601469a73f4cd194a6f433dd3dacd349": "e30f915c2d2ebf9bcdd2d3775567f9ad",
".git/objects/78/0367c216e2c302bc7f443832bbd3a1030b1e35": "7d9c648e66b151d688d0a818e328706b",
".git/objects/78/e6361c5be2c9b718975edb0d48e9a1dff1d9c9": "11771b37f3a30f7aa12b35eb3b5ff39a",
".git/objects/79/e864cc0a76ea825cbf2cc7add7d7b92869a4e6": "6ca2998f1a345921dd06be841ecbb1bb",
".git/objects/79/e9679e14e40d449e116fe6274e63285d1048e0": "55c21c5878b7a0ca767c35340209676f",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7d/855e22dc3b8e8fb890820034672b146d7cf983": "3a7daaf439901a198c5443a7134387d9",
".git/objects/7f/41244085429c4253ef544dc948c43b5d084e48": "99bb7e9529cef846dc6663846988de31",
".git/objects/84/f71a77cad10a80af0765c4c1ab2573d60db369": "a2837efd2d4f736e82066dd1b52d94ee",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/85/be817d17b93bcca894c9dbe8068b665d19c997": "af7d4f84cc8208d4b65bfbc873e9ded0",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/86/095e6f37d08a6bb3f7ac793a241656c094b415": "ce30b39159d94ab00351310763ab7831",
".git/objects/86/a653c344dc57119bd82c6ba9532f9955c3ea56": "0f50a5fefd1e302cdb1cb5b17b761ac4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/804c1dc73a7c3b5db9477aacba89c6837873ee": "70044b2c008a15c70db32aab1cb39d0f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/9f/e16155eba0b35370d46f87beeb731d52525ad3": "042b203bcadcb23678a6cb3db265fff4",
".git/objects/a0/782f0e45bcba2c5929f4e1f2ae98a20f45575a": "98105d5c1f2a46e934b6c34b91f65784",
".git/objects/a1/e9ff8e15523be2d1b5c84a971183ff2146dc13": "467ff9e3a47d28bb998b280aac2211a7",
".git/objects/a2/5d208cc54db67e63e6b2b94629d76780b3efaa": "3d86433b187416e90d5c92902ce9ae16",
".git/objects/a5/cbb7abb4f67d57782df28d800e8aa477c34d80": "1fc1846a9ba6f8b74e42b189fe341404",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/ab/4c129b1a866da400c896ae72cd13144fff67c8": "fed28ff74f5ddc40eb268349e2de5567",
".git/objects/ad/79cfca3c7a272bd11c55edff78b6911f2c9027": "fe4f53fbebffeeafc317c8ebe7ae8729",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/b3/672cab275bc715b4ae1d35ee3a95bc1072bf4a": "4d4d993feb4867bb19b913e7ddc585b7",
".git/objects/b4/b70abbf26a3ee2217fb350d5b3031b09431043": "10a8ad8418257128b6d1a825a3594ff0",
".git/objects/b6/a94841ca9ed958e349557205c3e7b8a63320fd": "16c23261daf0edee6204daaefc102418",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/5695d9aac0b47261a1ae830410da571192cbdc": "08615c8a82bd619d1808dbd5f59dcfa6",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/bd/9f5ea46bbce7f6130014b8802d6d9db734b10a": "a601c4d6e74ac54557bdec211bb41e26",
".git/objects/bd/e86451f14db869e4b2d27224926d09f6c82be2": "1a7decba9ea4f4b20b4d7402e9bcde92",
".git/objects/c3/c537548c60dca8be68734d019ec641727bb6ef": "a922c73c73e95afcfc2b55435c7a9045",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/ca/a760a5a6a47d29b2e7bbb80d311e8b76f98cfa": "cad5a068a758037a72e4605ceea9307b",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/584473357ca792d582c3c1904239a807ed8d4b": "d6451a5e2389c2d5ee80c5dbcdb2aeb2",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/dc/8f21997ee65177d46f2be855de4c73da1043f8": "7a5b938a3b3dd64ee7254a9624f2dbb9",
".git/objects/dd/e6b2e31fb34ba2c940b6a09abffa136093584c": "2bcd49d09ae76e7224764d17046cfe31",
".git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
".git/objects/df/e397dbd67fc2dc257559a53c2e1671f14b956c": "bd1fb3a239bd688536b51023290976e8",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/e2/9ae6f7b3fb0f78e3a77113305639f7f97789da": "e9cc3f644c86edb3f2265c3bf324f768",
".git/objects/e7/7058d5c41b1033020bdbe61ef2357670a3ddaf": "a498a798c2dcb1a548c4a6104de71701",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f7/23b3f17da537f14b411bca8f36d3dac0d15e9c": "d5c726df5aec7df98d3086a9ef43d1f3",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/ORIG_HEAD": "ca5103d1c317686198d0f8f26bb121cc",
".git/refs/heads/gh-pages": "edeba7b36fdeafd1678a336f31b39593",
".git/refs/heads/main": "448f78634d30e7110d552a8375cdbd22",
".git/refs/remotes/origin/gh-pages": "edeba7b36fdeafd1678a336f31b39593",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "448f78634d30e7110d552a8375cdbd22",
"assets/AssetManifest.bin": "7d9100ccd8ed1dafa8dc603854601c94",
"assets/AssetManifest.bin.json": "7bb0e47b3ef3cd5ff0519db3378039bc",
"assets/assets/images/intro_bg.png": "d1df52be291d2585927e838b296aa734",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "a2ca64a2103d7bad86fdbbdc5adca107",
"assets/NOTICES": "3435275b99e77cba09bb7a52a6223740",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/glass_kit/assets/noise.png": "86f22ae1a498bb8f0c39264f9c7c796c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "fbf98317214a547c146e840331d1f976",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0b92d6fc7f8c14b01f450eb3bd3abde4",
"/": "0b92d6fc7f8c14b01f450eb3bd3abde4",
"main.dart.js": "58738ace127cb987562528046990b9de",
"manifest.json": "e4b71d8e976e584f87d360644b294a37",
"version.json": "6e873e7e25416ed97ed340044248514c"};
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
