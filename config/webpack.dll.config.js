const path = require('path');
const webpack = require('webpack');
const library = '[name]_dll_lib';

module.exports = {

  mode: 'development',

  entry: {
    vendor: ['react', 'react-dom', 'react-router-dom']
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dll'),
    // 存放动态链接库的全局变量名称，例如对应 jquery来说就是 jquery_ali214654
    library: library
  },

  plugins: [
    // 打包生成一个 manifest.json --> 提供和jquery映射
    new webpack.DllPlugin({
      // 动态链接库的全局变量名称，需要和 output.library 中保持一致
      name: library,
      path: path.resolve(__dirname, '../dll/manifest.json') // 输出文件路径
    })
  ],
}
