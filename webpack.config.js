var webpack = require('webpack');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './index.jsx',
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders:[
      { test: /\.jsx$/, exclude: /node_modules/, loader: 'jsx-loader' },
      { test: /\.js$/, exclude:/node_modules/, loader: 'babel-loader'},
    ]
  },
  devServer: {
    host :'198.199.112.52',
  	port: 80
  },
  plugins: [
    new CommonsChunkPlugin('init.js'),
//    new OpenBrowserPlugin({ url: 'http://localhost:8080' })
    new HtmlWebpackPlugin({
        template: './index.html'
      })
  ]
};
