import React, { useState, useEffect } from "react"
import styles from "./AddCategoryCard.module.css"
import { Input } from "../../components/Input/Input"
import { addCategory } from "../../redux/timeReducer/time.action"
import { connect } from "react-redux"
import Button from "../../components/Button/Button"
import cx from "classnames"

const AddCategoryCard = ({ click, addCategory }) => {
  const [category, setCategory] = useState("")
  const [subCategory, setSubCategory] = useState("")
  const [cardMount, setCardMount] = useState(null)

  useEffect(() => {
    setCardMount(styles.cardMount)
  }, [])

  return (
    <div className={styles.wrapper}>
      <div className={cx(styles.card, cardMount ?? cardMount)}>
        <div className={styles.inputs}>
          <div className={styles.input}>
            category
            <Input
              mounted={cardMount}
              inputValue={category}
              handleChange={setCategory}
            ></Input>
          </div>
          <div className={styles.input}>
            subcategory
            <Input
              mounted={cardMount}
              inputValue={subCategory}
              handleChange={setSubCategory}
            ></Input>
          </div>
        </div>
        <Button
          mounted={cardMount}
          click={() => addCategory({ category, subCategory })}
        >
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
