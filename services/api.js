/*
 * @Author: XueYu 😊
 * @Date: 2019-03-29 22:36:37
 * @Last Modified by: XueYu😊
 * @Last Modified time: 2019-04-06 18:47:56
 */

import request from '../utils/request'

/* 获取我的文章 */
export const fetch_my_articles = _ => request('article/list')
/* 获取9部文章 */
export const fetch_fe9_articles = _ => request('article/fe9/list')
/* NASA 每日 */
export const fetch_NASA = _ => request('https://api.nasa.gov/planetary/apod?api_key=si5gTjppXl9N2RnKI5Mrekmr2gDFr2g4i1i6AeEE',{
  auto: false,
  method: 'GET'
})