const INITIAL_STATE = {
  work: {
    html: 0,
    css: 0,
    javascript: 0,
  },
  music: {
    harmonica: 0,
    production: 0,
    songwriting: 0,
  },
  training: {
    cycling: 0,
    running: 0,
    weights: 0,
  },
}

const timeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_TIME":
      return {
        ...state,
        [action.payload.activeCategory]: {
          ...state[action.payload.activeCategory],
          [action.payload.subCategory]:
            state[action.payload.activeCategory][action.payload.subCategory] +
            1,
        },
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
