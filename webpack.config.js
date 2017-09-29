const ExtractTextPlugin = require('extract-text-webpack-plugin')
const merge = require('webpack-merge')
const config = require('./webpack.config.base')
const webpack = require('webpack')

const minify = JSON.parse(process.env.COMPRESS || '0')

module.exports = merge({
  entry: {
    [minify ? 'doggy.min.js' : 'doggy.js']: './src/core/index.js',
    'vue.css': './src/themes/vue.styl'
  },
  module: {
    loaders: [
      {
        test: /\.styl$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!stylus-loader')
      }
    ]
  },
  plugins: minify ? [
    new ExtractTextPlugin('themes/vue.min.css'),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin()
  ] : [
    new ExtractTextPlugin('themes/vue.css')
  ]
}, config)
