/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

module.exports = {
  outputDir: path.join(__dirname, 'docs'),
  publicPath: process.env.NODE_ENV === 'production'
    ? '/sydnee.me/'
    : '/',
  chainWebpack: config => {
    config.module.rule('eslint').use('eslint-loader').options({
      fix: true,
    })
  },
}
