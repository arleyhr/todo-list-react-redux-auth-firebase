import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { push } from 'react-router-redux'
import { withRouter } from 'react-router-dom'
import { setAppLoading, cleanError, setError } from '../../actions/appActions'
import { setUser } from '../../actions/userActions'
import { getToDos } from '../../actions/todoActions'

function mapStateToProps (state) {
  const { user } = state.user
  return {
    ...state,
    user
  }
}

function mapDispatchToProps (dispatch) {
  return {
    changeRoute: route => {
      dispatch(push(route))
    },
    actions: bindActionCreators({
      setAppLoading,
      cleanError,
      setError,
      setUser,
      getToDos
    }, dispatch)
  }
}

export default comp => withRouter(connect(mapStateToProps, mapDispatchToProps)(comp))
