/*
 * @Author: XueYu 😊
 * @Date: 2019-03-29 14:43:27
 * @Last Modified by: XueYu😊
 * @Last Modified time: 2019-03-30 21:16:41
 */

function entities(state = { users: {}, repos: {} }, action) {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities)
  }
  return state
}

// Updates error message to notify about the failed fetches.
function errorMessage(state = null, action) {
  const { type, error } = action

  if (type === ActionTypes.RESET_ERROR_MESSAGE) {
    return null
  } else if (error) {
    return action.error
  }

  return state
}

const rootReducer = combineReducers({
  entities,
  errorMessage,
})

export default rootReducer