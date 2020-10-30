const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)/,
        use: ['file-loader']
      }
    ]
  },

  plugins: [
    /* new CleanWebpackPlugin(), */
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      title: '管理输出'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],

  mode: 'development',
  devtool: 'inline-source-map',

  devServer: {
    contentBase: './dist',
    hot: true
  }
};

