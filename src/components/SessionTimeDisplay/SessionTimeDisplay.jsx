import React from "react"
import styles from "./SessionTimeDisplay.module.css"
import { connect } from "react-redux"

const SessionTimeDisplay = ({ sessionTime }) => {
  return <div className={styles.timeDisplay}>{sessionTime}</div>
}

const mapStateToProps = (state) => ({
  time: state.time,
})

export default connect(mapStateToProps)(SessionTimeDisplay)
