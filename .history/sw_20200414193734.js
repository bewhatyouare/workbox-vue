importScripts("precache-manifest.c74e75044af8b5ffcdd7f974aa2c642b.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");


importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0-alpha.3/workbox-sw.js');
 
if (workbox) {
    console.log(`Yay! workbox is loaded `);
}
else {
    console.log(`Boo! workbox didn't load `);
}
console.info(workbox);
console.info(workbox.precaching)
//precache (预缓存) 静态文件
workbox.precaching.precacheAndRoute([
    './js/app.a030e145.js',
    './js/chunk-vendors.a2bfe163.js',
    {
        url:'./index.html',
        revision:'a030e145'
    }
]);
//https://blog.csdn.net/yelin042/article/details/79837745

