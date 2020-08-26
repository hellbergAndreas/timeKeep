import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { secondsConverter } from "../../utils/secondsConverter"

const TimeSpent = ({ time }) => {
  const [categoryValues, setCategoryValues] = useState({})
  const [totalValue, setTotalValue] = useState(0)

  console.log(categoryValues)
  console.log(totalValue)

  useEffect(() => {
    const timeDestruct = Object.entries(time)
    let sum = 0
    timeDestruct.forEach((el) => {
      let currentObject = Object.values(el[1]).reduce((acc, cur) => acc + cur)
      setCategoryValues((prevState) => ({
        ...prevState,
        [el[0]]: currentObject,
      }))
      sum += currentObject
    })
    setTotalValue(sum)
  }, [])

  return <div></div>
}

const mapStateToProps = (state) => ({
  time: state.time,
})

export default connect(mapStateToProps)(TimeSpent)
