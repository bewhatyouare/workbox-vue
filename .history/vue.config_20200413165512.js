module.exports = {
    // 对应webpack的output.publicPath
    publicPath: process.env.NODE_ENV === 'production'
    ? '/qqwork/': '/',
    //对应webpack 的 output.path
    outputDir:'dist',
    //对应webpack 的outputDir
    assetsDir:'',
    //生成的静态资源在它们的文件名中包含了 hash 
    filenameHashing:true,
    //所有 webpack-dev-server 的选项都支持
    devServer: {}
}