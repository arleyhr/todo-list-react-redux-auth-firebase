import React from 'react'
import PropTypes from 'prop-types'
import Avatar from 'material-ui/Avatar'

const UserAvatar = props => {
  if (!props.user) return <span>&nbsp;</span>

  if (props.user.photoURL) return <Avatar src={props.user.photoURL} size={50} />

  return (
    <Avatar size={50}>
      {props.user.displayName ? props.user.displayName.charAt(0) : props.user.email.charAt(0)}
    </Avatar>
  )
}

UserAvatar.propTypes = {
  user: PropTypes.object
}

export default UserAvatar
