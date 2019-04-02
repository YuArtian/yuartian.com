/*
 * @Author: XueYu 😊
 * @Date: 2019-03-27 19:22:49
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-04-02 18:20:59
 */
import * as actions from '../actions'
import { call, put, take, takeEvery, takeLatest, all, fork } from 'redux-saga/effects'
import * as api from '../services/api'

function* fetchEntity(entity, apiFn, args) {
  yield put(entity.request(args))
  const { response, error } = yield call(apiFn, args)
  if (response) {
    console.log('response',response)
    yield put(entity.success(response))
  }
  else {
    yield put(entity.failure(error))
  }
}

export const fetch_articles = fetchEntity.bind(null, actions.articles, api.fetch_articles)

/* 菜单切换 */
function* watch_sider_menu () {
  while (true) {
    const { payload: { selected_menu } } = yield take(actions.TOGGLE_MENU)
    console.log('selected_menu', selected_menu)
    const { title, api } = selected_menu
    if (title === 'All') {
      yield call(fetch_articles, { api, title })
    }
  }
}

// export default mySaga;
export default function* root() {
  yield all([
    fork(watch_sider_menu),

  ])
}