import React, { useEffect, useState, useContext } from "react"
import Button, { ButtonShape } from "../Button/Button"
import { connect } from "react-redux"
import { addTime } from "../../redux/timeReducer/time.action"

import styles from "./timer.module.css"
import { startStop } from "../../redux/isRunningReducer/isRunning.action"
import SessionTimeDisplay from "../SessionTimeDisplay/SessionTimeDisplay"
import {
  firebaseCreateTimeObject,
  firebaseUpdateTimeObject,
} from "../../firebase/firebase.utils"
import { AuthContext } from "../../AuthContext"

const Timer = ({
  category: { subCategory, activeCategory },
  addTime,
  isRunning,
  startStop,
  time,
}) => {
  const [intervalId, setIntervalId] = useState(null)
  const [sessionTime, setSessionTime] = useState({ sessionTime: 0 })
  const { currentUser } = useContext(AuthContext)
  const [startUp, setStartup] = useState(false)

  const [subCatTotal, setSubCatTotal] = useState({})

  useEffect(() => {}, [time])

  useEffect(() => {
    if (isRunning) {
      setIntervalId(
        setInterval(() => {
          addTime({ activeCategory, subCategory })
          setSessionTime((prevState) => ({
            sessionTime: prevState.sessionTime + 1,
          }))
        }, 1000)
      )
    } else {
      clearInterval(intervalId)
      setSessionTime({ sessionTime: 0 })
    }

    if (currentUser && startUp) {
      console.log("updating firebase")
      firebaseCreateTimeObject(
        "time",
        currentUser.uid,
        time,
        activeCategory,
        subCategory
      )
    }
    setStartup(true)
  }, [isRunning])

  const handleClick = () => {
    if (subCategory && activeCategory) {
      startStop(!isRunning)
    }
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
  addTime: (time) => dispatch(addTime(time)),
  startStop: (isRunning) => dispatch(startStop(isRunning)),
})
const mapStateToProps = (state) => ({
  category: state.category,
  isRunning: state.isRunning.isRunning,
  time: state.time,
})
export default connect(mapStateToProps, mapDispatchToProps)(Timer)
