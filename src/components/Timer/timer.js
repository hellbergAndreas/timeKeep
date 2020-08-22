import React, { useEffect } from "react"
import Button, { ButtonShape } from "../Button/Button"
import { connect } from "react-redux"
import { addTime } from "../../redux/timeReducer/time.action"
import StartTimerButton from "../startTimerButton/StartTimerButton"
import styles from "./timer.module.css"

const Timer = ({ category: { subCategory, activeCategory }, addTime }) => {
  console.log(activeCategory)
  return (
    <div className={styles.timer}>
      <Button
        shape={ButtonShape.ROUND_LARGE}
        click={() =>
          addTime({
            activeCategory,
            subCategory,
            time: 1,
          })
        }
      >
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
