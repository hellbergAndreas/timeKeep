const INITIAL_STATE = {}

const timeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CREATE_ENTRIE":
      const category = action.payload.activeCategory
      const subCategory = action.payload.subCategory
      const date = action.payload.date
      const time = action.payload.time

      state[category][subCategory].push({ date, time })
      return {
        ...state,
      }

    case "ADD_CATEGORY":
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
