import { resolve } from 'path';
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: ['./src/index.js'],
  devServer: {
    contentBase: resolve(__dirname, 'dist')
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        use: 'babel-loader',
      }, 
    ],
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
}