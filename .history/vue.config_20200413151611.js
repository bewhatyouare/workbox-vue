module.exports = {
    // 选项...
    publicPath: process.env.NODE_ENV === 'production'
    ? '/qqwork/': '/',
    //对应webpack 的 output.path
    outputDir:'dist'

}