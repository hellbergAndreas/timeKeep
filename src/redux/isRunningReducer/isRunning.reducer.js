const INITIAL_STATE = {
  isRunning: false,
}

const isRunningReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "START_STOP":
      return {
        isRunning: action.payload,
      }

    default:
      return state
  }
}

export default isRunningReducer
