import { setAppLoading } from './appActions'
import { newToDo, getAllToDos, updateRecord, deleteRecord, handdleFirebaseError } from '../libs/firebase'

export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const CHANGE_STATUS_TODO = 'CHANGE_STATUS_TODO'
export const EDIT_TODO = 'EDIT_TODO'
export const GET_TODOS = 'GET_TODOS'
export const EDITING = 'EDITING'

export const setEditing = () => dispatch => dispatch({ type: EDITING })

export const addToDo = description => (dispatch, getState) => {
  dispatch(setAppLoading(true))

  const { user: { user } } = getState()

  const todo = {
    description,
    done: false,
    userId: user.uid
  }

  newToDo(todo)
    .then(({ key }) => {
      dispatch({ type: ADD_TODO, payload: { ...todo, key } })
      dispatch(setAppLoading(false))
    })
    .catch(error => handdleFirebaseError(error, dispatch))
}

export const getToDos = () => (dispatch, getState) => {
  dispatch(setAppLoading(true))

  const { user: { user } } = getState()

  getAllToDos(user.uid)
    .then(todos => {
      dispatch({ type: GET_TODOS, payload: todos })
      dispatch(setAppLoading(false))
    })
    .catch(error => handdleFirebaseError(error, dispatch))
}

export const updateToDo = (key, newData) => dispatch => {
  dispatch(setAppLoading(true))
  updateRecord(key, newData)
    .then(() => {
      dispatch({ type: EDIT_TODO, payload: { key, newData } })
      dispatch(setAppLoading(false))
    })
    .catch(error => handdleFirebaseError(error, dispatch))
}

export const deleteToDo = key => (dispatch, getState) => {
  const confirmation = window.confirm('¿Realmente deseas eliminarlo?')

  if (confirmation) {
    dispatch(setAppLoading(true))
    const { user: { user } } = getState()

    deleteRecord(user.uid, key)
      .then(data => {
        dispatch({ type: DELETE_TODO, payload: key })
        dispatch(setAppLoading(false))
      })
      .catch(error => handdleFirebaseError(error, dispatch))
  }
}
