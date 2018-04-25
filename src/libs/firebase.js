import { database } from '../firebaseApp'
import { setAppLoading, setError } from '../actions/appActions'

const ToDos = database().ref('todos')

export const handdleFirebaseError = (error, dispatch) => {
  const errorMessage = error.message
  dispatch(setAppLoading(false))
  dispatch(setError(errorMessage))
}

export const newToDo = todo => {
  return new Promise((resolve, reject) => {
    ToDos
      .child(todo.userId)
      .push(todo)
      .then(resolve)
      .catch(reject)
  })
}

export const updateRecord = (key, newData) => {
  return new Promise((resolve, reject) => {
    const updates = {}
    updates[`/todos/${newData.userId}/${key}`] = newData
    database().ref().update(updates)
      .then(resolve)
      .catch(reject)
  })
}

export const getAllToDos = userKey => {
  return new Promise((resolve, reject) => {
    ToDos
      .child(userKey)
      .once('value')
      .then(snapshot => resolve(snapshot.val()))
      .catch(reject)
  })
}

export const deleteRecord = (userkey, key) => {
  return new Promise((resolve, reject) => {
    ToDos
      .child(userkey)
      .child(key)
      .remove()
      .then(resolve)
      .catch(reject)
  })
}
