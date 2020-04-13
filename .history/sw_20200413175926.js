
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0-alpha.3/workbox-sw.js');
 
if (workbox) {
    console.log(`Yay! workbox is loaded `);
}
else {
    console.log(`Boo! workbox didn't load `);
}

workbox.precaching.preacheAndRoute([
    '/styles/index.0c9a31.css',
    '/scripts/main.0d5770.js',
    {
        url: '/index.html',
        revision: '383676'
    },
]);
