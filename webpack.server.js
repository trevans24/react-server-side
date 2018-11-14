
const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
  // webpack to use node
  target: 'node',
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve('build'),
    publicPath: '/build'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
        options: {
          presets: [
            '@babel/preset-react'
          ]
        }
      }
    ]
  },
  externals: [webpackNodeExternals()]
}
