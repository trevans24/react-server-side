
const path = require('path');
const webpack = require('webpack');

module.exports = {
  // webpack to use node
  target: 'node',
  entry: './src/index.js',
  output: {
    filename: 'client-build.js',
    path: path.resolve(__dirname, 'build/public'),
    publicPath: '/build/public'
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
  plugins: [
    new webpack.ProvidePlugin({
      "React": "react",
    }),
  ],
}
