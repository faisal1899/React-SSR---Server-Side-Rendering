const path = require('path');
const merge = require('webpack-merge').merge;
const baseConfig = require('./webpack.base');

const config = {
  devtool: 'source-map',
  entry: path.resolve(__dirname, 'client/client.tsx'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  }
  // resolve: {
  //   extensions: ['.ts', '.tsx', '.js', '.jsx'],
  //   alias: {
  //     App: path.resolve(__dirname, 'src/app/')
  //   }
  // }
};

module.exports = merge(baseConfig, config);