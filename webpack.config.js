const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './js/main.js',
  output: {
    path: path.resolve(__dirname, './js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /GifLinks.js$/, loaders: ["exports-loader?GifLinks"] },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  resolve: {
    modules: ['js']
  }
}