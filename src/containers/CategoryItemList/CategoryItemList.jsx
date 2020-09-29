import React, { useContext, useState } from "react"
import styles from "./CategoryItemList.module.css"
import Button, { ButtonShape } from "../../components/Button/Button"
import Minus from "../../components/plus/minus"
import { connect } from "react-redux"
import {
  removeCategory,
  removeSubCategory,
} from "../../redux/timeReducer/time.action"
import {
  firebaseCreateTimeObject,
  firebaseDeleteCategory,
} from "../../firebase/firebase.utils"
import { AuthContext } from "../../AuthContext"
import { useEffect } from "react"

const CategoryItemList = ({
  categorys,
  subCategory,
  activeCategory,
  changeSubCategory,
  removeSubCategory,
  removeCategory,

  time,
}) => {
  const { currentUser } = useContext(AuthContext)

  const handleCategoryButton = (cat) => {
    if (subCategory === cat) {
      changeSubCategory({ subCategory: null })
    } else {
      changeSubCategory({ subCategory: cat })
    }
  }

  const handleRemoveSubCategory = (e) => {
    const categoryObject = { activeCategory, subCategory: e.target.name }

    removeSubCategory(categoryObject)

    firebaseCreateTimeObject("time", currentUser.uid, time)
    if (Object.keys(time[activeCategory]).length === 0) {
      firebaseDeleteCategory("time", currentUser.uid, activeCategory)
    }
  }

  return (
    <div className={styles.subCatList}>
      {Object.keys(categorys[activeCategory]).map((subCat) => {
        return (
          <div key={subCat}>
            <Button
              name={subCat}
              click={(e) => handleRemoveSubCategory(e)}
              shape={ButtonShape.ROUND_SMALLER}
            >
              <Minus />
            </Button>
            <Button
              canBeDeactivated={true}
              className={subCategory === subCat ? "active" : ""}
              click={() => handleCategoryButton(subCat)}
            >
              {subCat}
            </Button>
          </div>
        )
      })}
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  removeSubCategory: (category) => dispatch(removeSubCategory(category)),
  removeCategory: (activeCategory) => dispatch(removeCategory(activeCategory)),
})
const mapStateToProps = (state) => ({
  time: state.time,
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItemList)
