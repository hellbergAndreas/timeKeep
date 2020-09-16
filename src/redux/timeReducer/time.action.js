export const addTime = (time) => ({
  type: "ADD_TIME",
  payload: time,
})
export const addCategory = (category) => ({
  type: "ADD_CATEGORY",
  payload: category,
})

export const addFirebaseTimeObject = (time) => {
  return {
    type: "ADD_FIREBASE_TIME_OBJECT",
    payload: time,
  }
}
