import { combineReducers } from "redux"
import toggleHiddenReducer from "./openWindows/window.reducer.js"

export default combineReducers({
  hidden: toggleHiddenReducer,
})
