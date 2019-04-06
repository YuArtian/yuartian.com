/*
 * @Author: XueYu 😊
 * @Date: 2019-03-29 22:36:37
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-04-02 14:28:29
 */

import request from '../utils/request'

/* 获取文章 */
export const fetch_articles = ({api}) => request(api)
/* NASA 每日 */
export const fetch_NASA = _ => request('https://api.nasa.gov/planetary/apod?api_key=si5gTjppXl9N2RnKI5Mrekmr2gDFr2g4i1i6AeEE')