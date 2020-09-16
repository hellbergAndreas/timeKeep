import React from "react"
import styles from "./SessionTimeDisplay.module.css"
import { connect } from "react-redux"
import { secondsConverter } from "../../utils/secondsConverter"

const SessionTimeDisplay = ({ sessionTime }) => {
  let { hours, minutes, seconds } = secondsConverter(sessionTime)
  const lessThan10 = (time) => {
    if (time < 10) {
      return "0"
    }
  }
  return (
    <div className={styles.timeDisplay}>
      {lessThan10(hours)}
      {hours}:{lessThan10(minutes)}
      {minutes}:{lessThan10(seconds)}
      {seconds}
    </div>
  )
}
const mapStateToProps = (state) => ({
  time: state.time,
})

export default connect(mapStateToProps)(SessionTimeDisplay)
