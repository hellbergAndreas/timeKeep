import React, { useEffect, useState } from "react"
import { connect } from "react-redux"

import DonutChart from "../DonutChart/DonutChart"

const TimeSpent = ({ time, activeCategory, subCategory }) => {
  const [categoryValues, setCategoryValues] = useState({})
  const [subCategoryValues, setSubCategoryValues] = useState({})

  const [totalValue, setTotalValue] = useState(0)

  useEffect(() => {
    const categorys = [...Object.keys(time)]
    categorys.forEach((category) => {
      let categoryTotal = 0
      Object.entries(time[category]).forEach((thing) => {
        categoryTotal = subCategoryValues[thing[0]]
      })

      setCategoryValues((prevState) => {
        return {
          ...prevState,
          [category]: categoryTotal,
        }
      })
    })
  }, [subCategoryValues])

  useEffect(() => {
    let total = 0
    const categorys = [...Object.keys(time)]

    categorys.forEach((category) => {
      Object.entries(time[category]).reduce((acc, cur) => {
        let entries = cur[1]
        let subCategory = [cur[0]]
        let categoryTotal = 0
        entries.forEach((entrie) => {
          categoryTotal += entrie.time
          setSubCategoryValues((prevState) => {
            return {
              ...prevState,
              [subCategory]: categoryTotal,
            }
          })
        })
        time[category][subCategory].forEach((entrie) => {
          total += entrie.time
        })
      }, {})
    })
    setTotalValue(total)
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
  activeCategory: state.category.activeCategory,
  subCategory: state.category.subCategory,
})

export default connect(mapStateToProps)(TimeSpent)
