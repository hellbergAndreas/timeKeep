import React, { useState } from "react"
import styles from "./AddCategoryCard.module.css"
import { Input } from "../../components/Input/Input"
import { addCategory } from "../../redux/timeReducer/time.action"
import { connect } from "react-redux"
import Button from "../../components/Button/Button"

const AddCategoryCard = ({ click, addCategory }) => {
  const [category, setCategory] = useState("")
  const [subCategory, setSubCategory] = useState("")

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.inputs}>
          <div className={styles.input}>
            category
            <Input inputValue={category} handleChange={setCategory}></Input>
          </div>
          <div className={styles.input}>
            subcategory
            <Input
              inputValue={subCategory}
              handleChange={setSubCategory}
            ></Input>
          </div>
        </div>
        <Button click={() => addCategory({ category, subCategory })}>
          add
        </Button>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addCategory: (category) => dispatch(addCategory(category)),
})

export default connect(null, mapDispatchToProps)(AddCategoryCard)
