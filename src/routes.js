import React from 'react'
import { Switch, Route } from 'react-router'

import App from './containers/App'
import Login from './containers/Login'
import ToDo from './containers/ToDo'

export default (
  <App>
    <Switch>
      <Route exact path='/' component={Login} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/todo-list' component={ToDo} />
    </Switch>
  </App>
)
