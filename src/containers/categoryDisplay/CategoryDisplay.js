import React, { useState, useEffect } from "react"
import styles from "./CategoryDisplay.module.css"
import { connect } from "react-redux"
import { changeCategory } from "../../redux/categoryReducer/category.action"
import Button from "../../components/Button/Button"

const cateGORYData = { work: [2], music: [3], training: [1] }
const CategoryDisplay = ({ changeCategory }) => {
  const [categorys, setCategorys] = useState([])

  useEffect(() => {
    Object.keys(cateGORYData).map((cat) => {
      return setCategorys((prevState) => {
        return [...prevState, cat]
      })
    })
  }, [])

  return (
    <div className={styles.categoryDisplay}>
      {categorys.map((cat) => {
        return <Button click={() => changeCategory(cat)}>{cat}</Button>
      })}
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  changeCategory: (category) => dispatch(changeCategory(category)),
})

export default connect(null, mapDispatchToProps)(CategoryDisplay)
