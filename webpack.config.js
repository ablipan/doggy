const ExtractTextPlugin = require('extract-text-webpack-plugin')
const merge = require('webpack-merge')
const config = require('./webpack.config.base')

module.exports = merge({
  entry: {
    'doggy.js': './src/core/index.js',
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
  plugins: [
    new ExtractTextPlugin('vue.css')
  ]
}, config)
