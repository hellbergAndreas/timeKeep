export const timer = (callback, arg1, arg2) => {
  console.log(arg1, arg2)
  setInterval(() => {
    callback({ activeCategory: arg1, subCategory: arg2, time: 1 })
  }, 1000)
}
