import React, { useState, useEffect } from "react"
import styles from "./CategoryDisplay.module.css"
import TimeCircle from "../../components/timeCircle/TimeCircle"
import Button from "../../components/Button/Button"

const categoryData = ["music", "work", "training"]
const cateGORYData = { work: [2], music: [3], training: [1] }
const CategoryDisplay = () => {
  const [categorys, setCategorys] = useState([])

  useEffect(() => {
    Object.keys(cateGORYData).map((cat) => {
      return setCategorys((prevState) => {
        return [...prevState, cat]
      })
    })
  }, [])

  const handleClick = () => {
    console.log(categorys)
  }

  return (
    <div className={styles.categoryDisplay}>
      {categorys.map((cat) => {
        return <Button>{cat}</Button>
      })}
    </div>
  )
}

export default CategoryDisplay
