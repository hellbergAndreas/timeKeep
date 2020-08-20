import React from "react"
import Button from "../Button/Button"
import { connect } from 'react-redux'
import { addTime } from '../../redux/timeReducer/time.action'
import StartTimerButton from "../startTimerButton/StartTimerButton"
import styles from './timer.module.css'

const Timer = ({ activeCategory, addTime }) => {
  console.log(addTime)

  return <div className={styles.timer}><StartTimerButton click={() => addTime({ category: activeCategory, time: 1 })} >ADD TIME</StartTimerButton></div>
}

const mapDispatchToProps = (dispatch) => ({
  addTime: time => dispatch(addTime(time))
})
const mapStateToProps = (state) => ({
  activeCategory: state.activeCategory.activeCategory
})
export default connect(mapStateToProps, mapDispatchToProps)(Timer) 
