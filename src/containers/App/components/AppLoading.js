import React from 'react'
import PropTypes from 'prop-types'
import CircularProgress from 'material-ui/CircularProgress'

const AppLoading = props => props.isLoading ? (
  <div className='app-loading'>
    <CircularProgress size={60} thickness={7} />
  </div>
) : null

AppLoading.propTypes = {
  isLoading: PropTypes.bool
}

export default AppLoading
