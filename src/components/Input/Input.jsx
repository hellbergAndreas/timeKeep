import React from "react"
import styles from "./Input.module.css"
import cx from "classnames"

export const Input = ({ handleChange, mounted, name }) => {
  return (
    <input
      onChange={(e) => handleChange(e.target.value, name)}
      className={cx(styles.input, mounted && styles.mounted)}
    ></input>
  )
}
