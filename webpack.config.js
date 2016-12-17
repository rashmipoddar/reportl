var path = require('path');
var srcPath = path.join(__dirname, 'client');
var buildPath = path.join(__dirname, 'src');

module.exports = {
  context: srcPath,
  entry: path.join(srcPath, 'index.js'),
  output: {
    path: buildPath,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
