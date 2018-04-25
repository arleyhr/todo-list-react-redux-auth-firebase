import React from 'react'
import PropTypes from 'prop-types'
import RaisedButton from 'material-ui/RaisedButton'

const Form = props => (
  <form className='login-register-form' onSubmit={props.onSubmit}>
    <div>
      <label htmlFor={`email-${props.id}`}>Email</label>
      <input type='email' id={`email-${props.id}`} placeholder='Email' ref={props.emailRef} required />
    </div>
    <div>
      <label htmlFor={`password-${props.id}`}>Password</label>
      <input type='password' id={`password-${props.id}`} placeholder='Password' ref={props.passwordRef} required />
    </div>
    <RaisedButton
      label={props.isLogin ? 'Ingresar' : 'Registrar'}
      primary
      onClick={props.onSubmit}
    />
  </form>
)

Form.defaultProps = {
  isLogin: false
}

Form.propTypes = {
  isLogin: PropTypes.bool,
  emailRef: PropTypes.any,
  passwordRef: PropTypes.any,
  onSubmit: PropTypes.func,
  id: PropTypes.string
}

export default Form
