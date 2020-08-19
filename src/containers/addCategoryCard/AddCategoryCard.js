import React from "react"
import styles from "./AddCategoryCard.module.css"
import { connect } from "react-redux"
import { toggleHidden } from "../../redux/openWindows/window.action"
const AddCategoryCard = ({ hidden, toggleHidden }) => {
  const checkHidden = () => {
    if (!hidden) {
      return (
        <div className={styles.wrapper}>
          <div onClick={() => toggleHidden(true)} className={styles.card}>
            hejjjsanpådig
          </div>
        </div>
      )
    }
  }
  return <div>{checkHidden()}</div>
}
const mapStateToProps = (state) => ({
  hidden: state.hidden.addCategory,
})
const mapDispatchToProps = (dispatch) => ({
  toggleHidden: (hidden) => dispatch(toggleHidden(hidden)),
})
export default connect(mapStateToProps, mapDispatchToProps)(AddCategoryCard)
