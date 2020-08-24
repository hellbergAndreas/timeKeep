import React, { useState, useEffect } from "react"
import styles from "./CategoryDisplay.module.css"
import { connect } from "react-redux"
import {
  changeCategory,
  changeSubCategory,
} from "../../redux/categoryReducer/category.action"
import Button, { ButtonShape } from "../../components/Button/Button"
import CategoryItemList from "../CategoryItemList/CategoryItemList"
import Plus from "../../components/plus/Plus"

const CategoryDisplay = ({
  changeCategory,
  changeSubCategory,
  activeCategory,
  subCategory,
  time,
}) => {
  const renderCategoryList = (cat) => {
    if (cat === activeCategory) {
      return (
        <div className={styles.subCategoryDisplay}>
          <CategoryItemList
            activeCategory={activeCategory}
            subCategory={subCategory}
            categorys={time}
            changeSubCategory={changeSubCategory}
          ></CategoryItemList>
        </div>
      )
    }
  }
  const handleCategoryButton = (cat) => {
    if (activeCategory === cat) {
      changeCategory({ activeCategory: null })
      changeSubCategory({ subCategory: null })
    } else {
      changeCategory({ activeCategory: cat })
    }
  }

  return (
    <div className={styles.section}>
      <div className={styles.addBtn}>
        <Button style={{ padding: "10px" }} shape={ButtonShape.ROUND_SMALL}>
          {" "}
          <Plus></Plus>
        </Button>
      </div>
      <div className={styles.categoryDisplay}>
        {Object.keys(time).map((cat) => {
          return (
            <div>
              <div>
                <Button
                  className={activeCategory === cat ? "active" : ""}
                  click={() => handleCategoryButton(cat)}
                >
                  {cat}
                </Button>
              </div>
              {renderCategoryList(cat)}
            </div>
          )
        })}
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  changeCategory: (category) => dispatch(changeCategory(category)),
  changeSubCategory: (category) => dispatch(changeSubCategory(category)),
})
const mapStateToProps = (state) => ({
  activeCategory: state.category.activeCategory,
  subCategory: state.category.subCategory,
  time: state.time,
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDisplay)
