const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const baseResolve = require('./webpack.config.base.resolve');
const baseLoaders = require('./webpack.config.base.loaders');
const baseCacheGroups = require('./webpack.config.base.cachegroups');

module.exports = {
  mode: 'development',
  target: 'node',
  devtool: false,
  watchOptions: {
    ignored: /node_modules/,
    poll: 1000
  },
  resolve: baseResolve,
  module: { rules: baseLoaders },
  optimization: {
    // minimize: false,
    // 始终开启压缩，以保证在开发模式可以预览
    splitChunks: {
      cacheGroups: baseCacheGroups
    }
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new CopyWebpackPlugin([{
      from: 'src/icons',
      to: 'icons'
    }]),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(process.env.NODE_ENV === 'production')
    })
  ]
}
