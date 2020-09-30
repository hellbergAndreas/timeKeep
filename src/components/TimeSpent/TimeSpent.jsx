import React, { useEffect, useState } from "react"
import { useContext } from "react"
import { connect } from "react-redux"
import { AuthContext } from "../../AuthContext"
import fireApp from "../../firebase/firebase.utils"

import DonutChart from "../DonutChart/DonutChart"

const TimeSpent = ({ time, activeCategory, subCategory }) => {
  const { entryContext } = useContext(AuthContext)
  const [categoryTotals, setCategoryTotals] = useState({})
  const [subCategoryTotals, setSubCategoryTotals] = useState({})
  const [total, setTotal] = useState(0)
  console.log(subCategoryTotals)
  useEffect(() => {
    const categorys = Object.keys(time)
    // const drawing = {subCat1: 100, subCat2: 200}
    categorys.map((category) => {
      let total = 0
      Object.entries(time[category]).forEach((subCategory) => {
        console.log(subCategory[0])
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

  useEffect(() => {}, [activeCategory])

  return (
    <div>
      <DonutChart
        entryTime={entryContext.time > 0 && entryContext.time}
        bigTotal={1}
        activeCategoryTotal={1}
        subCategoryTotal={1}
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
