const INITIAL_STATE = {
  work: {
    html: 1000,
    css: 1000,
    javascript: 1000,
  },
  music: {
    harmonica: 1000,
    production: 2000,
    songwriting: 1000,
  },
  misc: {
    youtube: 1000,
    web: 8000,
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
        [action.payload.category]: { [action.payload.subCategory]: 0 },
      }

    default:
      return state
  }
}

export default timeReducer
