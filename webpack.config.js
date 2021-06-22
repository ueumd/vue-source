/**
 * https://www.webpackjs.com
 * @type {path.PlatformPath | path}
 */
const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    // 虚拟打包路径
    publicPath: 'static',
    filename: 'bundle.js'
  },
  devtool: "source-map", // 开启 方便调式
  devServer: {
    // 端口号
    port: 8080,
    // 静态资源文件夹
    contentBase: 'www'
  }
};
