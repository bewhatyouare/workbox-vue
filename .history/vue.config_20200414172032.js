module.exports = {
    // 对应webpack的output.publicPath
    publicPath: process.env.NODE_ENV === 'production'
    ? './': '/',
    //对应webpack 的 output.path
    outputDir:'dist',
    //对应webpack 的outputDir
    assetsDir:'',
    //生成的静态资源在它们的文件名中包含了 hash 
    filenameHashing:true,

    pwa: {
        name: 'tete App',
        themeColor: '#4DBA87',
        msTileColor: '#000000',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',
        favicon32: './img/icons/favicon-32x32.png',
        favicon16: './img/icons/favicon-16x16.png',
        //增加高光光亮的图标
        appleTouchIcon: './img/icons/apple-touch-icon-152x152.png',
        maskIcon: './img/icons/safari-pinned-tab.svg',
        msTileImage: './img/icons/msapplication-icon-144x144.png',
        // configure the workbox plugin
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
          // swSrc is required in InjectManifest mode.
          swSrc: './public/sw.js',
          swDest: './sw.js',
          // ...other Workbox options...
        }
    },
    //所有 webpack-dev-server 的选项都支持
    devServer: {}
}