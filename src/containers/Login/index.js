import React from 'react'
import PropTypes from 'prop-types'
import firebase from 'firebase'
import { Tabs, Tab } from 'material-ui/Tabs'
import { Card } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import Divider from 'material-ui/Divider'
import SwipeableViews from 'react-swipeable-views'

import connect from './store'
import { auth } from '../../firebaseApp'
import Form from './components/Form'

class LoginContainer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      currentTab: 0
    }

    this.handleGoogleAuth = this.handleGoogleAuth.bind(this)
    this.handleFacebookAuth = this.handleFacebookAuth.bind(this)
    this.handleTwitterAuth = this.handleTwitterAuth.bind(this)
    this.createUserWithEmailAndPassword = this.createUserWithEmailAndPassword.bind(this)
    this.handleWithEmailAndPassword = this.handleWithEmailAndPassword.bind(this)
    this.handleAuthError = this.handleAuthError.bind(this)
    this.handleTabChange = this.handleTabChange.bind(this)
    this.emailRef = React.createRef()
    this.passwordRef = React.createRef()
  }

  handleGoogleAuth () {
    this.props.actions.setAppLoading(true)

    const provider = new firebase.auth.GoogleAuthProvider()

    auth()
      .signInWithPopup(provider)
      .catch(this.handleAuthError)
  }

  handleFacebookAuth () {
    this.props.actions.setAppLoading(true)

    const provider = new firebase.auth.FacebookAuthProvider()

    auth()
      .signInWithPopup(provider)
      .catch(this.handleAuthError)
  }

  handleTwitterAuth () {
    this.props.actions.setAppLoading(true)

    const provider = new firebase.auth.TwitterAuthProvider()

    auth()
      .signInWithPopup(provider)
      .catch(this.handleAuthError)
  }

  handleWithEmailAndPassword (event) {
    this.props.actions.setAppLoading(true)

    event.preventDefault()
    const emailValue = this.emailRef.current.value
    const passwordValue = this.passwordRef.current.value

    auth()
      .signInWithEmailAndPassword(emailValue, passwordValue)
      .catch(this.handleAuthError)
  }

  createUserWithEmailAndPassword (event) {
    event.preventDefault()
    this.props.actions.setAppLoading(true)
    const emailValue = this.emailRef.current.value
    const passwordValue = this.passwordRef.current.value

    auth()
      .createUserWithEmailAndPassword(emailValue, passwordValue)
      .catch(this.handleAuthError)
  }

  handleAuthError (error) {
    const errorMessage = error.message
    this.props.actions.setAppLoading(false)
    this.props.actions.setError(errorMessage)
  }

  handleTabChange (newTab) {
    this.setState({ currentTab: newTab })
  }

  render () {
    return (
      <Card className='login-register-card-container'>
        <Tabs
          onChange={this.handleTabChange}
          value={this.state.currentTab}
        >
          <Tab
            label='Registrarse'
            value={0}
          />
          <Tab
            label='Ingresar'
            value={1}
          />
        </Tabs>
        <SwipeableViews
          index={this.state.currentTab}
          onChangeIndex={this.handleTabChange}
        >
          <div>
            <div>
              <RaisedButton
                className='google-button'
                label='Registrar con Google'
                primary
                onClick={this.handleGoogleAuth}
              />
            </div>
            <div>
              <RaisedButton
                className='facebook-button'
                label='Registrar con Facebook'
                primary
                onClick={this.handleFacebookAuth}
              />
            </div>
            <div>
              <RaisedButton
                className='twitter-button'
                label='Registrar con Twitter'
                primary
                onClick={this.handleTwitterAuth}
              />
            </div>
            <br />
            <Divider />
            <br />
            <div>
              <Form
                emailRef={this.emailRef}
                passwordRef={this.passwordRef}
                onSubmit={this.createUserWithEmailAndPassword}
                id='create'
              />
            </div>
          </div>

          <div>
            <div>
              <RaisedButton
                className='google-button'
                label='Ingresar con Google'
                primary
                onClick={this.handleGoogleAuth}
              />
            </div>
            <div>
              <RaisedButton
                className='facebook-button'
                label='Ingresar con Facebook'
                primary
                onClick={this.handleFacebookAuth}
              />
            </div>
            <div>
              <RaisedButton
                className='twitter-button'
                label='Ingresar con Twitter'
                primary
                onClick={this.handleTwitterAuth}
              />
            </div>
            <br />
            <Divider />
            <br />
            <div>
              <Form
                isLogin
                emailRef={this.emailRef}
                passwordRef={this.passwordRef}
                onSubmit={this.handleWithEmailAndPassword}
                id='login'
              />
            </div>
          </div>
        </SwipeableViews>
      </Card>
    )
  }
}

LoginContainer.propTypes = {
  actions: PropTypes.object
}

export default connect(LoginContainer)
