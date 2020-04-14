importScripts("precache-manifest.7edc37a85aa43e66cc5dc6fce4fada8f.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");


importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0-alpha.3/workbox-sw.js');
 
if (workbox) {
    console.log(`Yay! workbox is loaded `);
}
else {
    console.log(`Boo! workbox didn't load `);
}
//precache (预缓存) 静态文件
workbox.precaching.preacheAndRoute([
    '/js/app.eec3767d.js'
]);
//https://blog.csdn.net/yelin042/article/details/79837745

