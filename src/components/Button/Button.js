import React from "react"
import styles from "./button.module.css"
const Button = ({ color, size, children, click }) => {
  return (
    <button
      onClick={() => click()}
      style={{ color: color }}
      className={styles.button}
    >
      {children}
    </button>
  )
}

export default Button