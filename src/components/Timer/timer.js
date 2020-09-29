import React, { useEffect, useState, useContext } from "react"
import Button, { ButtonShape } from "../Button/Button"
import { connect } from "react-redux"

import styles from "./timer.module.css"
import { startStop } from "../../redux/isRunningReducer/isRunning.action"
import SessionTimeDisplay from "../SessionTimeDisplay/SessionTimeDisplay"
import {
  firebaseAddEntry,
  firebaseCreateTimeObject,
  firebaseUpdateTimeObject,
} from "../../firebase/firebase.utils"
import { AuthContext } from "../../AuthContext"

const Timer = ({
  category: { subCategory, activeCategory },

  isRunning,
  startStop,
  time,
  createEntry,
}) => {
  const [intervalId, setIntervalId] = useState(null)
  const [sessionTime, setSessionTime] = useState({ sessionTime: 0 })
  const { currentUser } = useContext(AuthContext)
  const [entry, setEntry] = useState({})
  const [startUp, setStartup] = useState(false)

  const sendEntryToFirebase = () => {
    const subCatEntries = time[activeCategory][subCategory]
    console.log(subCatEntries)
    console.log(entry)
    firebaseAddEntry(
      currentUser.uid,
      "time",
      activeCategory,
      subCategory,
      subCatEntries,
      entry
    )
    setEntry({})
  }
  useEffect(() => {}, [time])

  useEffect(() => {
    if (isRunning) {
      setIntervalId(
        setInterval(() => {
          setEntry((prevState) => {
            return {
              ...prevState,
              time: prevState.time + 1,
            }
          })
          setSessionTime((prevState) => ({
            sessionTime: prevState.sessionTime + 1,
          }))
        }, 1000)
      )
    } else {
      clearInterval(intervalId)
      setSessionTime({ sessionTime: 0 })
    }

    setStartup(true)
  }, [isRunning])

  const handleClick = () => {
    if (subCategory && activeCategory) {
      startStop(!isRunning)
    }
    if (!isRunning) {
      const date = new Date()
      setEntry({ date, time: 0 })
    }
    isRunning && sendEntryToFirebase()
  }

  return (
    <div className={styles.timer}>
      <Button shape={ButtonShape.ROUND_LARGE} click={() => handleClick()}>
        {isRunning ? "STOP" : "START"}
      </Button>
      <SessionTimeDisplay
        sessionTime={sessionTime.sessionTime}
      ></SessionTimeDisplay>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  startStop: (isRunning) => dispatch(startStop(isRunning)),
})
const mapStateToProps = (state) => ({
  category: state.category,
  isRunning: state.isRunning.isRunning,
  time: state.time,
})
export default connect(mapStateToProps, mapDispatchToProps)(Timer)
