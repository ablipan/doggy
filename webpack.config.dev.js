const merge = require('webpack-merge')
const path = require('path')
const config = require('./webpack.config.base')

module.exports = merge({
  entry: {
    'doggy': ['./src/core/index.js', './src/themes/vue.styl']
  },
  output: {
    filename: 'doggy.js',
    publicPath: '/dev/'
  },
  module: {
    loaders: [
      {
        test: /\.styl$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader!stylus-loader'
      }
    ]
  },
}, config)
