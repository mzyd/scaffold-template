const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const SRC_DIR = path.join(__dirname, '../src')

module.exports = {
  entry: {
    index: `${ SRC_DIR }/index.js`,
    print: `${ SRC_DIR }/print.js`,
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
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
    new webpack.HotModuleReplacementPlugin()
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

