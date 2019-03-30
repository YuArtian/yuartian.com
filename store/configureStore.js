/*
 * @Author: XueYu 😊
 * @Date: 2019-03-27 20:09:24
 * @Last Modified by:   XueYu 😊
 * @Last Modified time: 2019-03-27 20:09:24
 */
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configureStore.prod')
} else {
  module.exports = require('./configureStore.dev')
}