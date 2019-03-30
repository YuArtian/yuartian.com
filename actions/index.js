/*
 * @Author: XueYu 😊
 * @Date: 2019-03-30 14:25:35
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-03-30 14:58:48
 */

const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
		acc[type] = `${base}_${type}`
		return acc
	}, {})
}

const MY_ARTICLES = createRequestTypes('MY_ARTICLES')

function action (type, payload={}) {
  return { type, ...payload }
}

export const my_articles = {
  request: _ => action(MY_ARTICLES[REQUEST], {}),
  success: response => action(MY_ARTICLES[SUCCESS], {response}),
  failure: error => action(MY_ARTICLES[FAILURE], {error})
}
