const path = require('path');
const merge = require('webpack-merge')
const MiniPlugin = require('mini-program-webpack-loader').plugin;
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  entry: [
    path.resolve(__dirname, '../src/app-hi.json'),
    path.resolve(__dirname, '../src/app.json')
  ],
  output: {
    path: path.resolve(__dirname, '../dist-hi')
  },
  plugins: [
    new MiniPlugin({
      extfile: false
    })
  ]
})
