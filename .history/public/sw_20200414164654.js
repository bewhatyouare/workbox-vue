
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0-alpha.3/workbox-sw.js');
 
if (workbox) {
    console.log(`Yay! workbox is loaded `);
}
else {
    console.log(`Boo! workbox didn't load `);
}
console.info(workbox);
console.info(workbox.precaching.preacheAndRoute)
//precache (预缓存) 静态文件
workbox.precaching.preacheAndRoute([
    '/js/app.eec3767d.js',
    {
        url:'/index.html',
        revision:'eec3767d'
    }
]);
//https://blog.csdn.net/yelin042/article/details/79837745
