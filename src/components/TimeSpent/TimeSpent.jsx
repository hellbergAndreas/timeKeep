import React, { useEffect, useState } from "react"
import { connect } from "react-redux"

import DonutChart from "../DonutChart/DonutChart"

const TimeSpent = ({ time, activeCategory }) => {
  const [categoryValues, setCategoryValues] = useState({})
  const [donutDisplay, setDonutDisplay] = useState("all")
  const [totalValue, setTotalValue] = useState(0)

  const allCategorysToDonut = () => {
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
  }
  const oneCategoryToDonut = () => {
    let total = 0
    console.log(
      Object.entries(time[activeCategory]).forEach((entrie) => {
        total += entrie[1]
      })
    )
    setTotalValue(total)
    setCategoryValues((prevState) => ({
      ...time[activeCategory],
    }))
  }

  useEffect(() => {
    if (!activeCategory) {
      allCategorysToDonut()
    } else {
      oneCategoryToDonut()
    }
  }, [time])

  useEffect(() => {
    if (activeCategory) {
      oneCategoryToDonut()
    } else {
      allCategorysToDonut()
    }
  }, [activeCategory])

  return (
    <DonutChart
      totals={totalValue}
      categoryValues={categoryValues}
    ></DonutChart>
  )
}

const mapStateToProps = (state) => ({
  time: state.time,
  activeCategory: state.category.activeCategory,
})

export default connect(mapStateToProps)(TimeSpent)
