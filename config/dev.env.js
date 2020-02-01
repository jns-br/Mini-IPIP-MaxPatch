const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  DB_URL: 'mongodb://localhost:27017/Mini-IPIP'
})
