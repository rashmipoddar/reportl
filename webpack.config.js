const path = require('path');

const srcPath = path.join(__dirname, '/client');
const buildPath = path.join(__dirname, '/dist');

module.exports = {
  context: srcPath,
  entry: './index.jsx',
  output: {
    path: buildPath,
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1'],
      },
    }],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
