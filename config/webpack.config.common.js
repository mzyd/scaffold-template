const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')

const SRC_DIR = path.join(__dirname, '../src')

module.exports = {
  entry: {
    index: `${ SRC_DIR }/index.js`,
    print: `${ SRC_DIR }/print.js`,
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve('../dist'),
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)/,
        use: ['file-loader']
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../public/index.html'),
      title: 'react'
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    //告诉webpack哪些库不参与打包
    new webpack.DllReferencePlugin({
      manifest: path.resolve(__dirname, '../dll/manifest.json')
    }),
    //将文件自动引入到html中
    new AddAssetHtmlWebpackPlugin(
      { filepath: require.resolve('../dll/react.js') },
    ),
    new AddAssetHtmlWebpackPlugin(
      { filepath: require.resolve('../dll/reactDOM.js') },
    ),
  ],

  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },

  optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: 'all'
    }
  }

};
