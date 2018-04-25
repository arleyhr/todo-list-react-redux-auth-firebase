import { ADD_TODO, GET_TODOS, EDITING, EDIT_TODO, DELETE_TODO } from '../actions/todoActions'

const initialState = {
  todos: {},
  editing: false
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      const newData = { ...state.todos }
      newData[action.payload.key] = action.payload
      return {
        ...state,
        todos: newData
      }
    case GET_TODOS:
      return {
        ...state,
        todos: action.payload
      }
    case EDIT_TODO: {
      const newData = { ...state.todos }
      newData[action.payload.key] = action.payload.newData
      return {
        ...state,
        todos: newData
      }
    }
    case EDITING:
      return {
        ...state,
        editing: !state.editing
      }
    case DELETE_TODO: {
      const newData = { ...state.todos }
      delete newData[action.payload]
      return {
        ...state,
        todos: newData
      }
    }
    default:
      return state
  }
}
