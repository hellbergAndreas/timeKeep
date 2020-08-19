import React, { useState } from "react"
import styles from "./CreateMenu.module.css"

const CreateMenu = ({ click }) => {
  return (
    <div className={styles.wrapper}>
      <div onClick={() => click}>Add Category</div>
    </div>
  )
}

export default CreateMenu
