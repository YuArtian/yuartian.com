/*
 * @Author: XueYu 😊
 * @Date: 2018-12-31 15:46:05
 * @Last Modified by:   XueYu 😊
 * @Last Modified time: 2018-12-31 15:46:05
 */

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('../../static/iconfont', false, /\.svg$/)
requireAll(req)