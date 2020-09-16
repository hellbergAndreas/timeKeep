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
    } else {
      changeSubCategory({ subCategory: cat })
    }
  }

  return (
    <div className={styles.subCatList}>
      {Object.keys(categorys[activeCategory]).map((subCat) => {
        return (
          <Button
            key={subCat}
            canBeDeactivated={true}
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
