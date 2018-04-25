import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { push } from 'react-router-redux'
import { withRouter } from 'react-router-dom'
import { setAppLoading } from '../../actions/appActions'
import { addToDo, getToDos, setEditing, updateToDo, deleteToDo } from '../../actions/todoActions'

function mapStateToProps (state) {
  const { todos, editing } = state.todos
  const successToDos = {}
  const incompleteToDos = {}

  if (todos) {
    for (let todo in todos) {
      const currentToDo = todos[todo]
      if (currentToDo.done) successToDos[todo] = currentToDo
      else incompleteToDos[todo] = currentToDo
    }
  }

  return {
    ...state,
    successToDos,
    incompleteToDos,
    editing
  }
}

function mapDispatchToProps (dispatch) {
  return {
    changeRoute: route => {
      dispatch(push(route))
    },
    actions: bindActionCreators({
      setAppLoading,
      addToDo,
      getToDos,
      updateToDo,
      setEditing,
      deleteToDo
    }, dispatch)
  }
}

export default comp => withRouter(connect(mapStateToProps, mapDispatchToProps)(comp))
