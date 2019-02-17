/*
 * @Author: XueYu😊
 * @Date: 2019-02-16 15:11:33
 * @Last Modified by: XueYu😊
 * @Last Modified time: 2019-02-16 17:34:47
 */

module.exports = {
  plugins: {
    'autoprefixer': {},
    'postcss-pxtorem': {
      rootValue: 16,
      unitPrecision: 5,
      propList: ['font', 'font-size', 'line-height', 'letter-spacing', 'width', 'height'],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0
    },
  }
}