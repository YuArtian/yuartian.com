import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import api from '../middleware/api'
import rootReducer from '../reducers'
import rootSaga from '../saga'

const configureStore = preloadedState => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(sagaMiddleware, api)
  )
  sagaMiddleware.run(rootSaga)
  return store
}

export default configureStore
