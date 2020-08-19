const INITIAL_STATE = {
  addCategory: true,
}

const toggleHiddenReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "OPEN_ADDCAT_WINDOW":
      return {
        addCategory: action.payload,
      }

    default:
      return state
  }
}

export default toggleHiddenReducer
