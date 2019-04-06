/*
 * @Author: XueYu 😊
 * @Date: 2019-03-27 19:22:49
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-04-02 18:20:59
 */
import * as actions from '../actions'
import { call, put, take, takeEvery, takeLatest, all, fork } from 'redux-saga/effects'
import * as api from '../services/api'

function* fetchEntity(entity, apiFn, args={}) {
  yield put(entity.request(args))
  const { response, error } = yield call(apiFn, args)
  if (response) {
    yield put(entity.success(response))
  }
  else {
    yield put(entity.failure(error))
  }
}

export const fetch_my_articles = fetchEntity.bind(null, actions.my_articles, api.fetch_articles)
export const fetch_fe9_articles = fetchEntity.bind(null, actions.fe9_articles, api.fetch_articles)
export const fetch_NASA = fetchEntity.bind(null, actions.NASA_pic, api.fetch_NASA)

/* 菜单切换 */
function* watch_sider_menu () {
  while (true) {
    const { payload } = yield take(actions.TOGGLE_MENU)
    const { key, api } = payload
    if (key === 'my_article') {
      yield call(fetch_my_articles, { api, key })
    }
    if (key === 'fe9') {
      yield call(fetch_fe9_articles, { api, key })
    }
    if (key === 'daily') {
      yield call(fetch_NASA)
    }
  }
}

// export default mySaga;
export default function* root() {
  yield all([
    fork(watch_sider_menu),

  ])
}