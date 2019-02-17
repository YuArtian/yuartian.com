/*
 * @Author: XueYu 😊
 * @Date: 2018-12-26 18:15:53
 * @Last Modified by: XueYu😊
 * @Last Modified time: 2019-02-16 15:13:35
 */

let path = require('path')
const withSass = require('@zeit/next-sass')

module.exports = withSass({
  cssModules: true,
  webpack: (config, {}) => {
    config.module.rules.push({
      test: /\.svg$/,
      include: [path.resolve(__dirname, 'static/iconfont')],
      loader: 'svg-sprite-loader',
      options: {
        symbolId: 'icon-[name]'
      }
    })
    return config
  }
})