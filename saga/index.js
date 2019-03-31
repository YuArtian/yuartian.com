/*
 * @Author: XueYu 😊
 * @Date: 2019-03-27 19:22:49
 * @Last Modified by: XueYu😊
 * @Last Modified time: 2019-03-30 21:08:58
 */
import { my_articles } from '../actions'
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as api from '../services/api'

function* fetchEntity(entity, apiFn, id, url) {
   yield put( entity.request(id) )
   const {response, error} = yield call(apiFn, url || id)
   if(response)
      yield put( entity.success(id, response) )
   else
      yield put( entity.failure(id, error) )
}

export const fetch_my_articles = fetchEntity.bind(null, my_articles, api.fetch_my_articles)

// export default mySaga;
