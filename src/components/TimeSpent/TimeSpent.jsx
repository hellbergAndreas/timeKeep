import React, { useEffect, useState } from "react"
import { useContext } from "react"
import { connect } from "react-redux"
import { AuthContext } from "../../AuthContext"
import fireApp from "../../firebase/firebase.utils"

import DonutChart from "../DonutChart/DonutChart"

const TimeSpent = ({ time, activeCategory, subCategory }) => {
  const [categoryValues, setCategoryValues] = useState({})
  const [subCategoryValues, setSubCategoryValues] = useState({})

  const [bigTotal, setBigTotal] = useState(0)
  const [subCategoryTotal, setSubCategoryTotal] = useState(0)
  const [activeCategoryTotal, setActiveCategoryTotal] = useState(0)
  const { entryContext } = useContext(AuthContext)
  console.log(entryContext.time)

  useEffect(() => {
    // setting each categorys total
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
    //  calculates each subCategorys total value
    let total = 0
    const categorys = [...Object.keys(time)]

    categorys.forEach((category) => {
      Object.entries(time[category]).reduce((acc, cur) => {
        let entries = cur[1]
        let subCategory = [cur[0]]
        let categoryTotal = 0

        entries.forEach((entry) => {
          categoryTotal += entry.time
          setSubCategoryValues((prevState) => {
            return {
              ...prevState,
              [subCategory]: categoryTotal,
            }
          })
        })

        time[category][subCategory].forEach((entry) => {
          total += entry.time
        })
      }, {})
    })
    setBigTotal(total)
  }, [time])

  useEffect(() => {
    // sets total to active-categorys total
    let total = 0
    setCategoryValues({})
    activeCategory &&
      Object.keys(time[activeCategory]).forEach((subCategory) => {
        total += subCategoryValues[subCategory]

        setCategoryValues((prevState) => {
          return {
            ...prevState,
            [subCategory]: subCategoryValues[subCategory],
          }
        })
      })

    setActiveCategoryTotal(total)
  }, [activeCategory])

  useEffect(() => {
    setSubCategoryTotal(subCategoryValues[subCategory])
  }, [subCategory])
  return (
    <div>
      <DonutChart
        bigTotal={bigTotal}
        activeCategoryTotal={activeCategoryTotal}
        subCategoryTotal={subCategoryTotal}
        categoryValues={categoryValues}
      ></DonutChart>
    </div>
  )
}

const mapStateToProps = (state) => ({
  time: state.time,
  activeCategory: state.category.activeCategory,
  subCategory: state.category.subCategory,
})

export default connect(mapStateToProps)(TimeSpent)
