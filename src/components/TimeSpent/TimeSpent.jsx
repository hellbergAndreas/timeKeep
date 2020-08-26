import React, { useEffect, useState } from "react"
import { connect } from "react-redux"

const TimeSpent = ({ time }) => {
  const [categoryValues, setCategoryValues] = useState({})
  const [totalValue, setTotalValue] = useState(0)
  console.log(totalValue)
  useEffect(() => {
    Object.keys(time).forEach((key) => {
      setCategoryValues((prevState) => ({
        ...prevState,
        [key]: 0,
      }))
      Object.values(time[key]).forEach((value) => {
        setCategoryValues((prevState) => ({
          ...prevState,
          [key]: value + prevState[key],
        }))
      })
    })
  }, [])

  useEffect(() => {
    Object.keys(categoryValues).map((key) => {
      console.log(categoryValues[key])
      setTotalValue((prevState) => prevState + categoryValues[key])
    })
  }, [categoryValues])
  return <div></div>
}

const mapStateToProps = (state) => ({
  time: state.time,
})

export default connect(mapStateToProps)(TimeSpent)
