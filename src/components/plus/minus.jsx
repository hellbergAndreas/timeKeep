import React from "react"
import styles from "./Plus.module.css"
import cx from "classnames"

const Minus = () => {
  return (
    <div className={styles.container}>
      <div className={cx(styles.vertical, styles.minusVertical)}></div>
    </div>
  )
}
export default Minus
