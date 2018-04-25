import { IS_APP_LOADING, SET_ERROR } from '../actions/appActions'

const initialState = {
  isAppLoading: false,
  appError: false
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case IS_APP_LOADING:
      return {
        ...state,
        isAppLoading: action.payload
      }
    case SET_ERROR:
      return {
        ...state,
        appError: action.payload
      }
    default:
      return state
  }
}
