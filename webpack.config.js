var path = require('path')

var paths = {
  entry: path.join(__dirname, 'src/index.js'),
  output: path.join(__dirname, 'dist')
};

var config = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  entry: {
    index: paths.entry
  },
  output: {
    path: paths.output,
    filename: '[name].js'
  },
  devServer: {
    contentBase: './dist'
  }
}

module.exports = config;