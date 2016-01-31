/*
 * Webpack development server configuration
 *
 * This file is set up for serving the webpack-dev-server, which will watch for changes and recompile as required if
 * the subfolder /webpack-dev-server/ is visited. Visiting the root will not automatically reload.
 */
'use strict';
var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

module.exports = {

  output: {
    filename: 'main.js',
    publicPath: '/assets/',
  },

  cache: true,
  debug: true,
  devtool: '#inline-source-map',
  entry: [
      'webpack/hot/only-dev-server',
      './src/base/main.js'
  ],

  stats: {
    colors: true,
    reasons: true
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      'react-typewriter': path.join(__dirname, 'lib', 'react-typewriter')
    },
    root: path.join(__dirname, 'src')
  },
  module: {
    preLoaders: [{
      test: /\.jsx?$/,
      exclude: [/node_modules/, /lib/],
      loader: 'eslint'
    }],
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel-loader'
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.less$/,
      loader: 'style-loader!css-loader!less-loader!postcss-loader'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader!postcss-loader'
    }, {
      test: /\.(png|gif|jpg)$/,
      loader: 'url-loader?limit=8192'
    }, {
      test: /\.woff$/,
      loader: 'url-loader?limit=10000&mimetype=application/font-woff'
    }, {
      test: /\.woff2$/,
      loader: 'url-loader?limit=10000&mimetype=application/font-woff2'
    }, {
      test: /\.ttf$/,
      loader: 'file-loader'
    }, {
      test: /\.otf$/,
      loader: 'file-loader'
    }, {
      test: /\.eot$/,
      loader: 'file-loader'
    }, {
      test: /\.svg$/,
      loader: 'file-loader'
    }, {
      test: /\.mp4$/,
      loader: 'file-loader'
    }, {
      test: /\.ogv$/,
      loader: 'file-loader'
    }, {
      test: /\.webm$/,
      loader: 'file-loader'
    }, {
      test: /\.mp3$/,
      loader: 'file-loader'
    }]
  },

  postcss: [autoprefixer],

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]

};
