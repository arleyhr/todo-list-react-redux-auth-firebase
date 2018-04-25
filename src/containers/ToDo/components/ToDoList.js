import React from 'react'
import PropTypes from 'prop-types'
import { ListItem } from 'material-ui/List'
import ToDoItem from './ToDoItem'

const ToDoList = props => {
  if (!props.todos.length) return (<ListItem primaryText='No hay ToDos disponibles en esta lista' />)

  return (
    <ul className='todo-list'>
      {props.todos.map(item =>
        <ToDoItem
          key={item[0]}
          id={item[0]}
          description={item[1].description}
          done={item[1].done}
          editMode={props.editMode}
          onChange={evt => props.onChange(item[0], { ...item[1], description: evt.target.textContent })}
          setCheck={done => props.onChange(item[0], { ...item[1], done })}
          deleteItem={() => props.deleteItem(item[0])}
        />
      )}
    </ul>
  )
}

ToDoList.propTypes = {
  todos: PropTypes.array,
  onChange: PropTypes.func, // eslint-disable-line
  deleteItem: PropTypes.func, // eslint-disable-line
  editMode: PropTypes.bool
}

export default ToDoList
