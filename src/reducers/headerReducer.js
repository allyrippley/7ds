import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function linkReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_LINKS_SUCCESS:
      return Object.assign({}, state, {
        headerLinks: 1
      })

    default:
      return state
  }
}
