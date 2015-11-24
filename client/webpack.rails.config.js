
// Run like this:
// cd client && npm run webpack-rails
// Note that Foreman (Procfile.dev) has also been configured to take care of this.

// NOTE: All style sheets handled by the asset pipeline in rails

const config = require('./webpack.common.config')

config.output = {
  filename: 'client-bundle.js',
  path: '../app/assets/javascripts/generated'
}

config.module.loaders.push(

)

module.exports = config
