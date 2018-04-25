import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware, push } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import rootReducer from './reducers'

export default function configureStore (initialState, routerHistory) {
  const router = routerMiddleware(routerHistory)

  const actionCreators = {
    push
  }

  const middlewares = [ thunk, router ]

  const composeEnhancers = (() => {
    if (process.env.NODE_ENV === 'development') {
      return composeWithDevTools({ actionCreators })
    }
    return compose
  })()

  const enhancer = composeEnhancers(applyMiddleware(...middlewares))

  return createStore(rootReducer, initialState, enhancer)
}
