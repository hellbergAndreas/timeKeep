import React, { useState, useEffect, useContext } from "react"
import styles from "./AddCategoryCard.module.css"
import { Input } from "../../components/Input/Input"
import { addCategory } from "../../redux/timeReducer/time.action"
import { connect } from "react-redux"
import Button from "../../components/Button/Button"
import cx from "classnames"
import {
  firebaseAddCategory,
  firebaseCreateTimeObject,
} from "../../firebase/firebase.utils"
import { AuthContext } from "../../AuthContext"

const AddCategoryCard = ({ addCategory, time, edit }) => {
  const [category, setCategory] = useState("")
  const [subCategory, setSubCategory] = useState("")
  const [subCategoryFormated, setSubCategoryFormated] = useState(null)
  const [cardMount, setCardMount] = useState(null)
  const [subCatInputs, setSubCatInputs] = useState([""])
  const { currentUser } = useContext(AuthContext)

  useEffect(() => {
    setCardMount(styles.cardMount)
  }, [])

  const addSubCatInputs = () => {
    setSubCatInputs((prevState) => {
      return [...prevState, ""]
    })
  }
  const handleSubCategory = (value, name) => {
    setSubCategory((prevState) => {
      return {
        ...prevState,
        [name]: { [value]: [{ date: new Date(), time: 0 }] },
      }
    })
  }

  const renderSubCategoryInputs = (index) => {
    return (
      <Input
        name={index}
        mounted={cardMount}
        handleChange={handleSubCategory}
      ></Input>
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let subCatObject = {}
    Object.keys(subCategory).forEach((cat) => {
      subCatObject = { ...subCatObject, ...subCategory[cat] }
    })
    setSubCategory(subCatObject)
    setSubCategoryFormated(subCatObject)
  }

  useEffect(() => {
    subCategoryFormated &&
      firebaseAddCategory(currentUser.uid, "time", category, subCategory)
  }, [subCategoryFormated])

  return (
    <div className={styles.wrapper}>
      <div className={cx(styles.card, cardMount ?? cardMount)}>
        <form onSubmit={(e) => handleSubmit(e)}>
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
              <button type="button" onClick={addSubCatInputs}>
                subcategory +
              </button>
              {subCatInputs.map((input, index) => {
                return renderSubCategoryInputs(index)
              })}
            </div>
          </div>
          <Button
            type="submit"
            mounted={cardMount}
            click={(e) => handleSubmit(e)}
          >
            add
          </Button>
        </form>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addCategory: (category) => dispatch(addCategory(category)),
})
const mapStateToProps = (state) => ({
  time: state.time,
})

export default connect(mapStateToProps, mapDispatchToProps)(AddCategoryCard)
