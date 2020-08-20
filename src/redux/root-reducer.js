import { combineReducers } from "redux"
import toggleHiddenReducer from "./openWindows/window.reducer.js"
import changeCategory from "./categoryReducer/category.reducer"
import timeReducer from './timeReducer/time.reducer'

export default combineReducers({
  hidden: toggleHiddenReducer,
  activeCategory: changeCategory,
  time: timeReducer
})
