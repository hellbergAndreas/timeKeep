import React, { useEffect, useState } from "react"
import Button, { ButtonShape } from "../Button/Button"
import { connect } from "react-redux"
import { addTime } from "../../redux/timeReducer/time.action"

import styles from "./timer.module.css"
import { startStop } from "../../redux/isRunningReducer/isRunning.action"

const Timer = ({
  category: { subCategory, activeCategory },
  addTime,
  isRunning,
  startStop,
}) => {
  const [intervalId, setIntervalId] = useState(null)

  useEffect(() => {
    if (isRunning) {
      setIntervalId(
        setInterval(
          () => addTime({ activeCategory, subCategory, time: 1 }),
          1000
        )
      )
    } else {
      clearInterval(intervalId)
    }
  }, [isRunning])

  const handleClick = () => {
    if (subCategory && activeCategory) {
      startStop(!isRunning)
    }
  }
  return (
    <div className={styles.timer}>
      <Button
        timer={true}
        shape={ButtonShape.ROUND_LARGE}
        click={() => handleClick()}
      >
        {isRunning ? "STOP" : "START"}
      </Button>
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
})
export default connect(mapStateToProps, mapDispatchToProps)(Timer)
