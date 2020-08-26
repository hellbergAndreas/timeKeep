const INITIAL_STATE = {
  work: {
    html: 10,
    css: 0,
    javascript: 0,
  },
  music: {
    harmonica: 10,
    production: 0,
    songwriting: 10,
  },
  misc: {
    youtube: 10,
    web: 0,
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
