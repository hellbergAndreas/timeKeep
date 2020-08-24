import React from "react"
import styles from "./CategoryItemList.module.css"
import Button from "../../components/Button/Button"

const CategoryItemList = ({
  categorys,
  subCategory,
  activeCategory,
  changeSubCategory,
}) => {
  const handleCategoryButton = (cat) => {
    if (subCategory === cat) {
      changeSubCategory({ subCategory: null })
      console.log("lksjdf")
    } else {
      changeSubCategory({ subCategory: cat })
    }
  }

  return (
    <div>
      {Object.keys(categorys[activeCategory]).map((subCat) => {
        return (
          <Button
            className={subCategory === subCat ? "active" : ""}
            click={() => handleCategoryButton(subCat)}
          >
            {subCat}
          </Button>
        )
      })}
    </div>
  )
}

export default CategoryItemList
