import React from 'react'
import PropTypes from 'prop-types'
import Snackbar from 'material-ui/Snackbar'
import connect from './store'
import { auth } from '../../firebaseApp'

import AppBar from './components/AppBar'
import AppLoading from './components/AppLoading'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.logout = this.logout.bind(this)
  }
  componentWillMount () {
    this.props.actions.setAppLoading(true)
    auth().onAuthStateChanged(user => {
      if (user) {
        this.props.actions.setUser(user)
        this.props.actions.getToDos()
        this.props.changeRoute('/todo-list')
        return
      }
      this.props.changeRoute('/login')
      this.props.actions.setAppLoading(false)
    })
  }

  logout () {
    auth()
      .signOut()
      .then(() => this.props.actions.setUser(null))
  }

  render () {
    return (
      <div>
        <AppLoading isLoading={this.props.app.isAppLoading} />
        <AppBar user={this.props.user} logout={this.logout} />
        <div>{this.props.children}</div>
        <Snackbar
          open={this.props.app.appError}
          message={this.props.app.appError || ''}
          autoHideDuration={5000}
          onRequestClose={this.props.actions.cleanError}
        />
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.any,
  actions: PropTypes.object,
  changeRoute: PropTypes.func,
  app: PropTypes.object,
  user: PropTypes.object
}

export default connect(App)
