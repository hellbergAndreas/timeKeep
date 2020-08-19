const INITIAL_STATE = {
  activeCategory: null,
}

const categoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CHANGE_CATEGORY":
      return {
        ...state,
        activeCategory: action.payload,
      }
    default:
      return state
  }
}
export default categoryReducer
