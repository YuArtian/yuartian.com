import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware, { END } from 'redux-saga'
import rootReducer from '../reducers'
import DevTools from '../components/DevTools'
import rootSaga from '../saga'

const configureStore = preloadedState => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(sagaMiddleware, createLogger()),
      DevTools.instrument(),
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer)
    })
  }
  store.sagaTask = sagaMiddleware.run(rootSaga)
  return store
}

export default configureStore