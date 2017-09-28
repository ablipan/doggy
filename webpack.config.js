const ExtractTextPlugin = require('extract-text-webpack-plugin')
const merge = require('webpack-merge')
const config = require('./webpack.config.base')

module.exports = merge({
  entry: {
    'doggy.js': './src/core/index.js',
    // TODO
    'vue.css': './src/themes/vue.styl'
  },
  module: {
    loaders: [
      {
        test: /\.styl$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('css-loader', 'stylus-loader')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name]')
  ]
}, config)
