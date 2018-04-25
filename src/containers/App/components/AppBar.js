import React from 'react'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'

import UserAvatar from './UserAvatar'

const ApplicationBar = props => (
  <AppBar
    title={props.user ? `${props.user.displayName || props.user.email} - ToDo List App` : 'ToDo List App'}
    iconElementLeft={<UserAvatar user={props.user} />}
    iconElementRight={props.user ? <FlatButton label='Salir' onClick={props.logout} /> : null}
  />
)

ApplicationBar.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func
}

export default ApplicationBar
