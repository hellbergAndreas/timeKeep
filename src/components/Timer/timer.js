import React, { useEffect, useState } from "react"
import Button, { ButtonShape } from "../Button/Button"
import { connect } from "react-redux"
import { addTime } from "../../redux/timeReducer/time.action"

import styles from "./timer.module.css"

const Timer = ({ category: { subCategory, activeCategory }, addTime }) => {
  const [intervalId, setIntervalId] = useState(null)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    if (running) {
      setIntervalId(
        setInterval(
          () => addTime({ activeCategory, subCategory, time: 1 }),
          1000
        )
      )
    } else {
      clearInterval(intervalId)
      console.log("stoppint interval")
    }
  }, [running])

  const handleClick = () => {
    setRunning(!running)
  }
  return (
    <div className={styles.timer}>
      <Button shape={ButtonShape.ROUND_LARGE} click={() => handleClick()}>
        ADD TIME
      </Button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addTime: (time) => dispatch(addTime(time)),
})
const mapStateToProps = (state) => ({
  category: state.category,
})
export default connect(mapStateToProps, mapDispatchToProps)(Timer)
