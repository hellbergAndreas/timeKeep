const INITIAL_STATE = {}

const timeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_TIME":
      console.log(state)
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
      const category = action.payload.category
      const subCategory = action.payload.subCategory
      const prevState = { ...state[category] }

      return {
        ...state,
        [action.payload.category]: { ...prevState, ...subCategory },
      }

    case "ADD_FIREBASE_TIME_OBJECT":
      return {
        ...state,
        ...action.payload,
      }
    case "RESET_TIME_OBJECT":
      return {
        ...action.payload,
      }
    case "REMOVE_SUBCATEGORY": {
      const category = action.payload.activeCategory
      const subCategory = action.payload.subCategory
      delete state[category][subCategory]
      return {
        ...state,
      }
    }
    case "REMOVE_CATEGORY": {
      delete state[action.payload]
      return {
        ...state,
      }
    }

    default:
      return state
  }
}

export default timeReducer
