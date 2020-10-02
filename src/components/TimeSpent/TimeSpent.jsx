import React, { useEffect, useState } from "react"
import { useContext } from "react"
import { connect } from "react-redux"
import Auth, { AuthContext } from "../../AuthContext"
import fireApp from "../../firebase/firebase.utils"

import DonutChart from "../DonutChart/DonutChart"

const TimeSpent = ({ time, activeCategory, subCategory }) => {
  const { entryContext } = useContext(AuthContext)
  const [categoryTotals, setCategoryTotals] = useState({})
  const [subCategoryTotals, setSubCategoryTotals] = useState({})
  const { sessionTime } = useContext(AuthContext)
  const [total, setTotal] = useState(0)

  // console.log(activeCategory && subCategoryTotals[activeCategory][subCategory])

  useEffect(() => {
    const categorys = Object.keys(time)
    categorys.map((category) => {
      let total = 0
      Object.entries(time[category]).forEach((subCategory) => {
        let subCatTotal = 0
        subCategory[1].forEach((entry) => {
          total += entry.time
          subCatTotal += entry.time
          setSubCategoryTotals((prevState) => {
            return {
              ...prevState,
              [category]: {
                ...prevState[category],
                [subCategory[0]]: subCatTotal,
              },
            }
          })
        })
        setCategoryTotals((prevState) => {
          return {
            ...prevState,
            [category]: total,
          }
        })
      })
    })
  }, [time])

  useEffect(() => {
    let total = 0
    Object.values(categoryTotals).forEach((value) => {
      total += value
    })
    setTotal(total)
  }, [sessionTime, categoryTotals])
  console.log(sessionTime)
  useEffect(() => {
    // updating each subcategorys total

    if (activeCategory && sessionTime.time > 0) {
      let total = subCategoryTotals[activeCategory][subCategory] + 1

      setSubCategoryTotals((prevState) => {
        return {
          ...prevState,
          [activeCategory]: {
            ...prevState[activeCategory],
            [subCategory]: total,
          },
        }
      })
    }
  }, [sessionTime])

  useEffect(() => {
    // updates every categorys total
    if (activeCategory && subCategory && sessionTime.time > 0) {
      let total = categoryTotals[activeCategory] + 1

      setCategoryTotals((prevState) => {
        return {
          ...prevState,
          [activeCategory]: total,
        }
      })
    }
  }, [sessionTime])

  return (
    <div>
      <DonutChart
        total={total}
        categoryTotal={activeCategory && categoryTotals[activeCategory]}
        subCatTotal={
          activeCategory &&
          subCategory &&
          subCategoryTotals[activeCategory][subCategory]
        }
        entryTime={sessionTime.time > 0 && sessionTime.time}
        categoryTotals={categoryTotals}
        chartValues={
          activeCategory ? subCategoryTotals[activeCategory] : categoryTotals
        }
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

// const TimeSpent = ({ time, activeCategory, subCategory }) => {
//   const [categoryValues, setCategoryValues] = useState({})

//   const [subCategoryValues, setSubCategoryValues] = useState({})

//   const [bigTotal, setBigTotal] = useState(0)
//   const [subCategoryTotal, setSubCategoryTotal] = useState(0)
//   const [activeCategoryTotal, setActiveCategoryTotal] = useState(0)
//   const { entryContext } = useContext(AuthContext)

//   const [categorys, setCategorys] = useState()

//   console.log(subCategoryValues)
//   useEffect(() => {}, [activeCategory])

//   useEffect(() => {
//     //  calculates each subCategorys total value for the grand total
//     let total = 0
//     const categorys = [...Object.keys(time)]

//     categorys.forEach((category) => {
//       Object.entries(time[category]).reduce((acc, cur) => {
//         let entries = cur[1]
//         let subCategory = [cur[0]]
//         let categoryTotal = 0

//         entries.forEach((entry) => {
//           categoryTotal += entry.time
//           setSubCategoryValues((prevState) => {
//             return {
//               ...prevState,
//               [subCategory]: categoryTotal,
//             }
//           })
//         })

//         time[category][subCategory].forEach((entry) => {
//           total += entry.time
//         })
//       }, {})
//     })

//     setBigTotal(total)
//   }, [time, entryContext])

//   useEffect(() => {
//     // sets total to active-categorys total
//     let total = 0
//     setCategoryValues({})
//     activeCategory &&
//       Object.keys(time[activeCategory]).forEach((subCategory) => {
//         total += subCategoryValues[subCategory]
//         setCategoryValues((prevState) => {
//           return {
//             ...prevState,
//             [subCategory]: subCategoryValues[subCategory] + entryContext.time,
//           }
//         })
//       })
//     setActiveCategoryTotal(total)
//   }, [activeCategory, entryContext])

//   useEffect(() => {
//     setSubCategoryTotal(subCategoryValues[subCategory])
//   }, [subCategory, entryContext])
//   return (
//     <div>
//       <DonutChart
//         entryTime={entryContext.time > 0 && entryContext.time}
//         bigTotal={bigTotal}
//         activeCategoryTotal={activeCategory && activeCategoryTotal}
//         subCategoryTotal={subCategoryTotal}
//         categoryValues={categoryValues}
//       ></DonutChart>
//     </div>
//   )
// }

// const mapStateToProps = (state) => ({
//   time: state.time,
//   activeCategory: state.category.activeCategory,
//   subCategory: state.category.subCategory,
// })

// export default connect(mapStateToProps)(TimeSpent)
