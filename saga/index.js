/*
 * @Author: XueYu 😊
 * @Date: 2019-03-27 19:22:49
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-03-27 19:56:31
 */
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

function* fetchUser(action) {
  try {
     const user = yield call(Api.fetchUser);
     yield put({type: "USER_FETCH_SUCCEEDED", user: user});
  } catch (e) {
     yield put({type: "USER_FETCH_FAILED", message: e.message});
  }
}

/*
 在每个 `USER_FETCH_REQUESTED` action 被 dispatch 时调用 fetchUser
 允许并发（译注：即同时处理多个相同的 action）
*/
/* function* mySaga() {
 yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
} */

/*
 也可以使用 takeLatest

 不允许并发，dispatch 一个 `USER_FETCH_REQUESTED` action 时，
 如果在这之前已经有一个 `USER_FETCH_REQUESTED` action 在处理中，
 那么处理中的 action 会被取消，只会执行当前的
*/
function* mySaga() {
 yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
}

export default mySaga;
