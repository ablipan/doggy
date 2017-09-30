const webpack = require('webpack')

module.exports = {
  devtool: '#source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'es3ify-loader!babel-loader'
      },
      {
        test: /\.json/,
        loader: 'json-loader'
      }
    ],
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
  ]
  // Why not working?
  // eslint: {
  //   formatter: require('eslint-formatter-pretty')
  // }
}
