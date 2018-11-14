
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
  plugins: [
    new webpack.ProvidePlugin({
      "React": "react",
    }),
  ],
}
