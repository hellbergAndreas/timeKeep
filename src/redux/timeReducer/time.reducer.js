const INITIAL_STATE = {}

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
        [action.payload.category]: { ...action.payload.subCategory },
      }

    case "ADD_FIREBASE_TIME_OBJECT":
      return {
        ...state,
        ...action.payload,
      }

    default:
      return state
  }
}

export default timeReducer
