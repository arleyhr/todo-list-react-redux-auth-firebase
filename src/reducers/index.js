import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import app from './app'
import user from './user'
import todos from './todos'

const rootReducer = combineReducers({
  app,
  routing: router,
  user,
  todos
})

export default rootReducer
