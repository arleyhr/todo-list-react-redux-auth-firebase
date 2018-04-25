import React from 'react'
import PropTypes from 'prop-types'
import Divider from 'material-ui/Divider'
import Checkbox from 'material-ui/Checkbox'
import IconButton from 'material-ui/IconButton'
import DeleteIcon from 'material-ui/svg-icons/action/delete'

const ToDoItem = props => (
  <li className={`todo-item ${props.editMode ? 'is-editing' : ''}`}>
    <div className='todo-item-checkbox'>
      <Checkbox
        checked={props.done}
        onCheck={() => props.setCheck(!props.done)}
      />
    </div>
    <div className='todo-item-description'>
      <div
        suppressContentEditableWarning='true'
        contentEditable={props.editMode}
        onBlur={props.onChange}>
        {props.description}
      </div>
    </div>
    <div className='todo-item-delete'>
      <IconButton onClick={props.deleteItem}><DeleteIcon color='#515151' /></IconButton>
    </div>
    <Divider />
  </li>
)

ToDoItem.defaultProps = {
  editMode: false
}

ToDoItem.propTypes = {
  description: PropTypes.string,
  editMode: PropTypes.bool,
  setCheck: PropTypes.func,
  deleteItem: PropTypes.func,
  onChange: PropTypes.func,
  done: PropTypes.bool
}

export default ToDoItem
