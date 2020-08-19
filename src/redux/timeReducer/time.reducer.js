const INITIAL_STATE = {}

const timeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_TIME":
      return {
        [action.payload.category]:
          state[action.payload].time + action.payload.time,
      }
    case "ADD_CATEGORY":
      return {
        ...state,
        [action.payload]: 0,
      }
    case "CHANGE_CATEGORY":
      return {
        ...state,
        [action.payload]: 0,
      }
    default:
      return state
  }
}

export default timeReducer
