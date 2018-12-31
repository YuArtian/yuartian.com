/*
 * @Author: XueYu 😊
 * @Date: 2018-12-26 18:15:53
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2018-12-26 23:20:55
 */

let path = require('path')

module.exports = {
  webpack: (config, {}) => {
    console.log('config.module.rules',config.module.rules)
    config.module.rules.push({
      test: /\.svg$/,
      include: [path.resolve(__dirname, 'static/iconfont')],
      loader: 'svg-sprite-loader',
      options: {
        symbolId: 'icon-[name]'
      }
      /* use: [{


      },
      'svg-fill-loader',
      'svgo-loader'] */
    })
    return config
  }
}