const path = require('path')
const webpack = require('webpack')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')

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
    //所有 webpack-dev-server 的选项都支持
    devServer: {},
    configureWebpack: {
        plugins: [
          new webpack.DllReferencePlugin({
            context: process.cwd(),
            manifest: require('./public/vendor/vendor-manifest.json')
          }),
           // 将 dll 注入到 生成的 html 模板中
           new AddAssetHtmlPlugin({
            // dll文件位置
            filepath: path.resolve(__dirname, './public/vendor/*.js'),
            // dll 引用路径
            publicPath: './vendor',
            // dll最终输出的目录
            outputPath: './vendor'
          })
        ]
    }
}