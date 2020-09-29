const INITIAL_STATE = {}

const entrieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_TIME": {
      return {
        ...state,
      }
    }

    default:
      return state
  }
}

export default entrieReducer
