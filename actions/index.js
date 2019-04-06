/*
 * @Author: XueYu 😊
 * @Date: 2019-03-30 14:25:35
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-04-02 18:43:38
 */

export const REQUEST = 'REQUEST'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'

function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
		acc[type] = `${base}__${type}`
		return acc
	}, {})
}

export const MY_ARTICLES = createRequestTypes('MY_ARTICLES')
export const FE9_ARTICLES = createRequestTypes('FE9_ARTICLES')
export const NASA_PIC = createRequestTypes('NASA_PIC')

export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE'
export const TOGGLE_MENU = 'TOGGLE_MENU'
export const LOAD_ARTICLES = 'LOAD_ARTICLES'
export const LOAD_ABLUM_PAGE = 'LOAD_ABLUM_PAGE'

function action (type, payload={}) {
  return { type, payload }
}

/* 我的文章 */
// export const MY_ARTICLES_LOADING = 'MY_ARTICLES__LOADING'
export const my_articles = {
  request: _ => action(MY_ARTICLES[REQUEST], {}),
  success: response => action(MY_ARTICLES[SUCCESS], {response: { articles_list: response }}),
  failure: error => action(MY_ARTICLES[FAILURE], {error}),
}
/* 9部 */
export const fe9_articles = {
  request: _ => action(FE9_ARTICLES[REQUEST], {}),
  success: response => action(FE9_ARTICLES[SUCCESS], {response: { articles_list: response }}),
  failure: error => action(FE9_ARTICLES[FAILURE], {error}),
}
/* NASA 每日一图 */
export const NASA_pic = {
  request: _ => action(NASA_PIC[REQUEST], {}),
  success: response => action(NASA_PIC[SUCCESS], {response: { url: response }}),
  failure: error => action(NASA_PIC[FAILURE], {error}),
}
/* 菜单切换 */
export const toggle_menu = selected_menu => action(TOGGLE_MENU, selected_menu)

/* Ablum */
export const load_ablum_page = _ => action(LOAD_ABLUM_PAGE)