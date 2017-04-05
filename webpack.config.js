const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './js/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /gifLinks.js$/, loaders: ["exports-loader?gifLinks=GifLinks"] },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
}