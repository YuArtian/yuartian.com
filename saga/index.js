/*
 * @Author: XueYu 😊
 * @Date: 2019-03-27 19:22:49
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-04-08 15:35:09
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

export const fetch_my_articles = fetchEntity.bind(null, actions.my_articles, api.fetch_my_articles)
export const fetch_fe9_articles = fetchEntity.bind(null, actions.fe9_articles, api.fetch_fe9_articles)
export const fetch_NASA = fetchEntity.bind(null, actions.NASA_pic, api.fetch_NASA)

/* 菜单切换 */
function* watch_sider_menu(){
  while (true) {
    const { payload } = yield take(actions.TOGGLE_MENU)
    const { key, api } = payload

    if (key === 'daily') {
      console.log('daily');
      yield call(fetch_NASA)
    }
  }
}

/* My Article */
function* watch_load_my_article_page(){
  while(true){
    yield take(actions.LOAD_MY_ARTICLE_PAGE)
    yield call(fetch_my_articles)
  }
}
/* fe9 文章 */
function* watch_load_fe9_article_page(){
  while(true){
    yield take(actions.LOAD_FE9_ARTICLE_PAGE)
    yield call(fetch_fe9_articles)
  }
}
/* Ablum */
function* watch_load_ablum_page(){
  while(true){

  }
}

// export default mySaga;
export default function* root() {
  yield all([
    fork(watch_load_my_article_page),
    fork(watch_load_fe9_article_page),
  ])
}