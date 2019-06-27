/*
 * @Author: XueYu 😊
 * @Date: 2018-12-31 15:46:05
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-06-25 19:41:29
 */

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('../../assets/iconfont', false, /\.svg$/)
const all = requireAll(req)

export function find_svg_by_name (name) {
  let iconfont_name_list = []
  const find_svg = all.filter(url => {
    let url_arr = url.split('/')
    let url_last_name = url_arr.pop()
    return url_last_name.includes(name)
  })
  return find_svg[0]
}

export default all