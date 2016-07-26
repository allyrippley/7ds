import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function linkReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_LINKS_SUCCESS:
      return Object.assign({}, state, {
        headerLinks: 1
      })
    case types.SHOW_APP_SUB_MENU:
      return Object.assign({}, state, {
        showAppSubMenu: true
      })
    case types.HIDE_APP_SUB_MENU:
      return Object.assign({}, state, {
        showAppSubMenu: false
      })

    default:
      return state
  }
}
