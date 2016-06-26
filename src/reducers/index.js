// Set up your root reducer here...
 import { combineReducers } from 'redux'
 import heroImage from './heroReducer'
 import headerInfo from './headerReducer'
 const rootReducer = combineReducers({
   headerInfo,
   heroImage
 })

 export default rootReducer
