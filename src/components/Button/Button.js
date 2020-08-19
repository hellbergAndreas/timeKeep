import React from "react"
import styles from "./button.module.css"
const Button = ({ color, size, children }) => {
  return (
    <button style={{ color: color }} className={styles.button}>
      {children}
    </button>
  )
}

export default Button
