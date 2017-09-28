module.exports = {
  output: {
    filename: '[name]',
    path: __dirname + '/dist',
    publicPath: '/dist/'
  },
  devtool: '#source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
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
  // Why not working?
  // eslint: {
  //   formatter: require('eslint-formatter-pretty')
  // }
}
