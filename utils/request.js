/*
 * @Author: XueYu 😊
 * @Date: 2019-02-22 15:59:36
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-02-26 18:33:14
 */
import fetch from 'isomorphic-unfetch'

export default async function request (url, { method='GET', body={}, ...otherOptions }) {
  const OPTION = {
    headers: {
      'Content-Type': 'application/json'
    },
    method,
    body: JSON.stringify(body),
    ...otherOptions,
  }
  // 请求地址 拼接
  const URL = 'http://localhost:3000/' + String(url)

  return await fetch(URL, OPTION)
    .then(res => res.json())
    .catch(e => console.log('e',e))
}