import React from "react"
import styles from "./TimeCircle.module.css"

const TimeCircle = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.percent}></div>
        <svg>
          <circle cx="70" cy="70" r="70"></circle>
          <circle cx="70" cy="70" r="70"></circle>
        </svg>
      </div>
    </div>
  )
}

export default TimeCircle
