import React from 'react'
import styles from './startTimerButton.module.css'
const StartTimerButton = ({ click, children }) => {
  return (<button onClick={() => click()} className={styles.btnPlay}>

    <div className={styles.iconContainer}>
      <svg className={styles.iconPlay}>

      </svg>
    </div>
    <div className={styles.iconContainer}>
      <svg className={styles.iconPause}>

      </svg>
    </div >
    {children}
  </button >)
}

export default StartTimerButton