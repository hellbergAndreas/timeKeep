import { combineReducers } from "redux"
import toggleHiddenReducer from "./openWindows/window.reducer.js"
import changeCategory from "./categoryReducer/category.reducer"
import timeReducer from "./timeReducer/time.reducer"
import isRunningReducer from "./isRunningReducer/isRunning.reducer"
import entrieReducer from "./entrieReducer/entrie.reducer.js"

export default combineReducers({
  hidden: toggleHiddenReducer,
  category: changeCategory,
  isRunning: isRunningReducer,
  time: timeReducer,
  entrie: entrieReducer,
})
