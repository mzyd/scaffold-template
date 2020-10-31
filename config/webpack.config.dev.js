const common = require('./webpack.config.common.js')
const webpack = require('webpack')
const { merge } = require('webpack-merge')

module.exports = merge(common, {

  /* entry: {
   *   index: '../src/index.js'
   * }, */

  mode: 'development',

})


