import React from "react"
import styles from "./Input.module.css"

export const Input = ({ handleChange }) => {
  return (
    <input
      onChange={(e) => handleChange(e.target.value)}
      className={styles.input}
    ></input>
  )
}
