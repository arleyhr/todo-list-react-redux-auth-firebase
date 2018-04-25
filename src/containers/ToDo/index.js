import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import EditIcon from 'material-ui/svg-icons/editor/mode-edit'
import connect from './store'
import ToDoTabs from './components/ToDoTabs'
import ToDoForm from './components/ToDoForm'

class TodoContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentTab: 0
    }

    this.onSaveItem = this.onSaveItem.bind(this)
    this.handleTabChange = this.handleTabChange.bind(this)
    this.newItemRef = React.createRef()
  }

  onSaveItem (event) {
    event.preventDefault()
    this.props.actions.addToDo(this.newItemRef.current.value)
    this.newItemRef.current.value = ''
  }

  handleTabChange (newTab) {
    this.setState({ currentTab: newTab })
  }

  componentWillMount () {
    if (this.props.user.user) this.props.actions.getToDos()
  }

  render () {
    return (
      <section className='todo-card-container'>
        <div className='relative'>
          <RaisedButton
            className='button-edit'
            onClick={this.props.actions.setEditing}
            label={this.props.editing ? 'Dejar de Editar' : 'Editar'}
            secondary
            icon={<EditIcon />}
          />
        </div>
        <Card>
          <ToDoTabs
            indexTab={this.state.currentTab}
            handleTabChange={this.handleTabChange}
            successToDos={Object.entries(this.props.successToDos)}
            incompleteToDos={Object.entries(this.props.incompleteToDos)}
            editMode={this.props.editing}
            onChange={this.props.actions.updateToDo}
            deleteItem={this.props.actions.deleteToDo}
          />
        </Card>
        <ToDoForm
          onSubmit={this.onSaveItem}
          descriptionRef={this.newItemRef}
        />
      </section>
    )
  }
}

TodoContainer.propTypes = {
  actions: PropTypes.object,
  successToDos: PropTypes.object,
  incompleteToDos: PropTypes.object,
  editing: PropTypes.bool,
  user: PropTypes.object
}

export default connect(TodoContainer)
