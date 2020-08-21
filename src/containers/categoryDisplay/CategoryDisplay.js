import React, { useState, useEffect } from "react"
import styles from "./CategoryDisplay.module.css"
import { connect } from "react-redux"
import { changeCategory } from "../../redux/categoryReducer/category.action"
import Button from "../../components/Button/Button"
import CategoryItemList from "../CategoryItemList/CategoryItemList"

const cateGORYData = { work: [2], music: [3], training: [1] }
const CategoryDisplay = ({ changeCategory, activeCategory, time }) => {
  const [categorys, setCategorys] = useState([])

  useEffect(() => {
    Object.keys(cateGORYData).map((cat) => {
      return setCategorys((prevState) => {
        return [...prevState, cat]
      })
    })
  }, [])

  const renderCategoryList = (cat) => {
    if (cat === activeCategory) {
      return (<div className={styles.subCategoryDisplay}>
        <CategoryItemList category={activeCategory} subCategory={time}></CategoryItemList>
      </div>)
    }
  }

  return (
    <div className={styles.section}>
      <div className={styles.categoryDisplay}>
        {categorys.map((cat) => {
          return <div>
            <div>
              <Button click={() => changeCategory({ category: cat })}>{cat}</Button>
            </div>
            {renderCategoryList(cat)}
          </div>
        })}
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  changeCategory: (category) => dispatch(changeCategory(category)),
})
const mapStateToProps = (state) => ({
  activeCategory: state.activeCategory.activeCategory,
  time: state.time

})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDisplay)
