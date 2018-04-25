export const SET_USER = 'SET_USER'

export const setUser = value => dispatch =>
  dispatch({ type: SET_USER, payload: value })
