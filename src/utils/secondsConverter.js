export const secondsConverter = (time) => {
  const hours = Math.floor(time / 3600)
  const remainder = Math.floor(time % 3600)
  const minutes = Math.floor(remainder / 60)
  const seconds = Math.floor(remainder % 60)
  return { hours, minutes, seconds }
}
