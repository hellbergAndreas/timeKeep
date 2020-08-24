const INITIAL_STATE = {
  activeCategory: null,
  subCategory: null,
}

const categoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CHANGE_CATEGORY":
      return {
        ...state,
        activeCategory: action.payload.activeCategory,
      }
    case "CHANGE_SUBCATEGORY":
      return {
        ...state,
        subCategory: action.payload.subCategory,
      }

    default:
      return state
  }
}
export default categoryReducer
