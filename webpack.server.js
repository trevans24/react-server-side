
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
        test: /\.js$|\.jsx$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
        options: {
          presets: [
            '@babel/preset-react'
          ]
        }
      },
      {
        test: /\.(s*)css$/,
        loader: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.jpeg$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$|\.jpg$/,
        loader: 'file-loader',
        query: {
          name: 'assets/img/[name].[ext]'
        },
      },
    ]
  },
  externals: [webpackNodeExternals()]
}
