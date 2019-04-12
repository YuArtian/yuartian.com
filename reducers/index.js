/*
 * @Author: XueYu 😊
 * @Date: 2019-03-29 14:43:27
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-04-02 17:41:55
 */
import { combineReducers } from 'redux'
import * as ActionTypes from '../actions'
import SIDER_MENU_CONFIG from '../common/sider_menu_config'

function entities(state = {}, action) {
  if (action.payload && action.payload.response) {
    return {...state, ...action.payload.response}
  }
  return state
}

// Updates error message to notify about the failed fetches.
function errorMessage (state = null, action) {
  const { type, error } = action

  if (type === ActionTypes.RESET_ERROR_MESSAGE) {
    return null
  } else if (error) {
    return action.error
  }
  return state
}

//切换菜单
function sider_menu (state={ SIDER_MENU_CONFIG, selected_menu: [] }, action) {
  const {type, payload} = action
  if (type === ActionTypes.TOGGLE_MENU) {
    return { ...state, selected_menu: payload }
  }
  return state
}
//loading 状态
function loading (state={}, action) {
  const {type} = action
  const [loading_name, loading_type] = type.split('__')
  if(!loading_name || !loading_type) return state

  if (loading_type === ActionTypes.REQUEST) {
    return {...state, [loading_name]: true }
  }
  if (loading_type === ActionTypes.SUCCESS || loading_type === ActionTypes.FAILURE) {
    return {...state, [loading_name]: false }
  }
  return state
}

const rootReducer = combineReducers({
  entities,
  loading,
  errorMessage,
})

export default rootReducer