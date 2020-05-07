'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "9f013d5f99349c241d3705b43f157e6b",
"assets/FontManifest.json": "20f06156f88546eb9b5aa3d0c637a71c",
"assets/fonts/IndieFlower-Regular.ttf": "0841af952c807bdf56455b1addb4c7df",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/NotoSerif-Bold.ttf": "77c225c157db0de7043cc9524bf5bd03",
"assets/fonts/NotoSerif-BoldItalic.ttf": "b458e9f281a4b584f8daaed5e74e7a58",
"assets/fonts/NotoSerif-Italic.ttf": "1d43d0f9b7b2e15a9639af5141bde606",
"assets/fonts/NotoSerif-Regular.ttf": "d1c72e0e788cf2bbc1de53da57599bec",
"assets/Images/c++.png": "c7dfae9ac81b419e26e7ddc8a63ebbf1",
"assets/Images/c-logo.png": "acd90b1f96e58610e064ce6e0d006411",
"assets/Images/c.svg": "1df85772474d0c785952a154241873ee",
"assets/Images/Capture.PNG": "fcb47382ce5f71f881384ae870fc63da",
"assets/Images/firebase.png": "c24b6b9c0fcd84c7b258879880472660",
"assets/Images/flutter.png": "cb5cc808c41fa932cb121de17522f09e",
"assets/Images/img.jpg": "37b7c904dc7203421e3195ce859efb12",
"assets/Images/kotlin.png": "fcd733626ddbcf9dbe2f2cd3229da196",
"assets/Images/linkedin.png": "1b18d461ce75c75fdb4d7b6ec08b3e65",
"assets/Images/Octocat.png": "ef468e275a2c13d0bc7156549261fde6",
"assets/Images/Python.jpg": "69abbabfc500bf7e0f8b4737fb09e379",
"assets/Images/Python.svg": "f073c98660fc4290f4d3d8d8f7b1e046",
"assets/Images/ruk.jpeg": "5fb289e7ad3dd9e735536f80d90c36f6",
"assets/Images/sql.png": "06f8964a0d38ab91aabbeae875e0a1ca",
"assets/LICENSE": "a90f571005e62df7ad6652d9f9da4239",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "3e31801c00bc84f38e0e63c93ce5fcb1",
"/": "3e31801c00bc84f38e0e63c93ce5fcb1",
"main.dart.js": "e3ae568e30c4ec78e30d97934e43e094",
"manifest.json": "325befbdcf9df321eb99abf12191d799"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
