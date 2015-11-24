// Common webpack configuration used by webpack.hot.config and webpack.rails.config.

const path = require('path')

module.exports = {

  context: __dirname,
  entry: ['./app/index.js'],

  externals: {
    jQuery: 'var jQuery'
  },

  resolve: {
    root: [path.join(__dirname, 'app'),
           path.join(__dirname, 'app/components')],
    extensions: ['', '.js', '.jsx', '.scss', '.css', 'config.js']
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel'] },
    ]
  }
}
