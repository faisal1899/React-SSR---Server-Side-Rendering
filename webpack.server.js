const path = require('path');
const merge = require('webpack-merge').merge;
const baseConfig = require('./webpack.base');
const WebpackNodeExternals = require('webpack-node-externals');

const config = {
  target: 'node',
  entry: path.resolve(__dirname, 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js'
  },
  // resolve: {
  //   extensions: ['.ts', '.tsx', '.js', '.jsx']
  // },
  externals: [
    WebpackNodeExternals()
  ]
};

module.exports = merge(baseConfig, config);