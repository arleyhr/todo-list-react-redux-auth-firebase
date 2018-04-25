import React from 'react'
import PropTypes from 'prop-types'

const ToDoForm = props => (
  <form className='todo-new-form' onSubmit={props.onSubmit}>
    <input type='text' placeholder='Agregar Nuevo ToDo' ref={props.descriptionRef} autoFocus required />
  </form>
)

ToDoForm.propTypes = {
  onSubmit: PropTypes.func,
  descriptionRef: PropTypes.any
}

export default ToDoForm
