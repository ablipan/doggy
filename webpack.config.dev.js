const merge = require('webpack-merge')
const config = require('./webpack.config.base')

module.exports = merge({
  entry: {
    'doggy.js': ['./src/core/index.js', './src/themes/vue.styl']
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
