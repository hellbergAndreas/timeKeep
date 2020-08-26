import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { secondsConverter } from "../../utils/secondsConverter"
import DonutChart from "../DonutChart/DonutChart"

const TimeSpent = ({ time }) => {
  const [categoryValues, setCategoryValues] = useState({})
  const [totalValue, setTotalValue] = useState(0)

  useEffect(() => {
    let sum = 0
    Object.entries(time).forEach((el) => {
      let currentObject = Object.values(el[1]).reduce((acc, cur) => acc + cur)
      setCategoryValues((prevState) => ({
        ...prevState,
        [el[0]]: currentObject,
      }))
      sum += currentObject
    })
    setTotalValue(sum)
  }, [time])

  return (
    <DonutChart
      totals={totalValue}
      categoryValues={categoryValues}
    ></DonutChart>
  )
}

const mapStateToProps = (state) => ({
  time: state.time,
})

export default connect(mapStateToProps)(TimeSpent)
