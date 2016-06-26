import {NEXT_HERO,FIRST_HERO} from '../constants/actionTypes'
import initialState from './initialState'

export default function heroReducer(state = initialState, action) {
  switch (action) {
    case NEXT_HERO:
      return Object.assign({}, state, {
        heroImage: state.heroImage + 1
      })
    case FIRST_HERO:
      return Object.assign({}, state, {
        heroImage: 1
      })
    default:
      return state
  }
}
