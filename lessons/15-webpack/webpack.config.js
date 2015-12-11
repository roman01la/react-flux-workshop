const webpack = require('webpack');
const path = require('path');

const ADDRESS = '0.0.0.0';
const PORT = 3000;

const __DEV__ = process.env.NODE_ENV === 'development';

const plugins = [];
const loaders = [];

if (__DEV__) {

  plugins.push(new webpack.HotModuleReplacementPlugin());
  plugins.push(new webpack.NoErrorsPlugin());

  loaders.push({ test: /\.(js|jsx)$/, exclude: /node_modules/, loaders: ['react-hot', 'babel-loader?stage=0&optional=runtime&cacheDirectory'] });
} else {

  plugins.push(new webpack.optimize.DedupePlugin());
  plugins.push(new webpack.optimize.OccurenceOrderPlugin());
  plugins.push(new webpack.optimize.UglifyJsPlugin({ acorn: true }));

  loaders.push({ test: /\.(js|jsx)$/, exclude: /node_modules/, loaders: ['babel-loader?stage=0&optional=runtime'] });
}

plugins.push(new webpack.DefinePlugin({
  __DEV__: __DEV__,
  'process.env': { 'NODE_ENV': __DEV__ ? '"delevopment"' : '"production"' }
}));

module.exports = {
  address: ADDRESS,
  port: PORT,
  devtool: __DEV__ ? 'cheap-module-eval-source-map' : 'source-map',
  watch: __DEV__ ? true : false,
  entry: [
    'webpack-dev-server/client?http://' + ADDRESS + ':' + PORT,
    'webpack/hot/only-dev-server',
    path.join(__dirname, '/src/app.jsx')
  ],
  module: {
    loaders
  },
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'app.js',
    publicPath: '/build/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins
};
