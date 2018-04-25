import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { createHashHistory } from 'history'
import { ConnectedRouter } from 'react-router-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import routes from './routes'
import configureStore from './store'
import './app.global.css'

injectTapEventPlugin()

const syncHistoryWithStore = (store, history) => {
  const { routing } = store.getState()
  if (routing && routing.location) {
    history.replace(routing.location)
  }
}

const initialState = {}
const routerHistory = createHashHistory()
const store = configureStore(initialState, routerHistory)
syncHistoryWithStore(store, routerHistory)

const rootElement = document.querySelector('#app')

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <ConnectedRouter history={routerHistory}>
        {routes}
      </ConnectedRouter>
    </MuiThemeProvider>
  </Provider>,
  rootElement
)
