import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setAppLoading, setError } from '../../actions/appActions'
import { setUser } from '../../actions/userActions'

function mapStateToProps (state) {
  return {
    ...state
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({
      setAppLoading,
      setError,
      setUser
    }, dispatch)
  }
}

export default comp => connect(mapStateToProps, mapDispatchToProps)(comp)
