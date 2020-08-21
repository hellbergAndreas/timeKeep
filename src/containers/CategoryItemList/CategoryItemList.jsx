import React from "react"
import styles from "./CategoryItemList.module.css"
import Button from "../../components/Button/Button"

const CategoryItemList = ({ activeCategory, subCategory, click }) => {
  return (
    <div>
      {Object.keys(subCategory[activeCategory]).map((subCat) => {
        return (
          <Button click={() => click({ activeCategory, subCategory: subCat })}>
            {subCat}
          </Button>
        )
      })}
    </div>
  )
}

export default CategoryItemList
