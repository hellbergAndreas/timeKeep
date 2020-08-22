import React from "react"
import styles from "./CategoryItemList.module.css"
import Button from "../../components/Button/Button"

const CategoryItemList = ({ activeCategory, subCategory, changeCategory }) => {
  return (
    <div>
      {Object.keys(subCategory[activeCategory]).map((subCat) => {
        return (
          <Button
            click={() =>
              changeCategory({ activeCategory, subCategory: subCat })
            }
          >
            {subCat}
          </Button>
        )
      })}
    </div>
  )
}

export default CategoryItemList
