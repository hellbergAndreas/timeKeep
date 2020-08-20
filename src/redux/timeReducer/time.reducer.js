const INITIAL_STATE = {
  work: 0,
  music: 0,
  training: 0
}

const timeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_TIME":
      return {
        ...state,
        [action.payload.category]:
          state[action.payload.category] + action.payload.time,
      }
    case "ADD_CATEGORY":
      return {
        ...state,
        [action.payload]: 0,
      }

    default:
      return state
  }
}

export default timeReducer
