'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  APTPATH:'"https://vue-course-api.hexschool.io"',
  CUSTOMPATH:'"x4pqnk20"',
})
