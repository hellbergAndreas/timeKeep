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
import AddCategoryCard from "../addCategoryCard/AddCategoryCard"
import { removeSubCategory } from "../../redux/timeReducer/time.action"

const CategoryDisplay = ({
  changeCategory,
  changeSubCategory,
  activeCategory,
  subCategory,
  time,
}) => {
  const [hidden, setHidden] = useState(true)

  const handleEdit = (e) => {}

  const renderCategoryList = (cat) => {
    if (cat === activeCategory) {
      return (
        <div className={styles.subCategoryDisplay}>
          <Button
            name={activeCategory}
            click={(e) => handleEdit(e)}
            shape={ButtonShape.ROUND_SMALLER}
          >
            <Plus />
          </Button>
          <CategoryItemList
            removeSubcategory={removeSubCategory}
            activeCategory={activeCategory}
            subCategory={subCategory}
            categorys={time}
            changeSubCategory={changeSubCategory}
          ></CategoryItemList>
        </div>
      )
    }
  }

  const renderCategoryCard = () => {
    if (!hidden) {
      return (
        <AddCategoryCard click={() => setHidden(!hidden)}></AddCategoryCard>
      )
    }
  }

  const handleCategoryButton = (cat) => {
    if (activeCategory === cat) {
      changeCategory({ activeCategory: null })
    } else {
      changeCategory({ activeCategory: cat })
      changeSubCategory({ subCategory: null })
    }
  }

  return (
    <div className={styles.section}>
      <div className={styles.addBtn}>
        <Button
          click={() => setHidden(!hidden)}
          style={{ padding: "10px" }}
          shape={ButtonShape.ROUND_SMALL}
        >
          <Plus></Plus>
        </Button>
      </div>

      {renderCategoryCard()}
      <div className={styles.categoryDisplay}>
        {Object.keys(time).map((cat) => {
          return (
            <div key={cat}>
              <div>
                <Button
                  canBeDeactivated={true}
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
