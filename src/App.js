import React from "react"

import NavBar from "./containers/NavBar/NavBar"
import styles from "./index.module.css"
import CategoryDisplay from "./containers/categoryDisplay/CategoryDisplay"

import Timer from "./components/Timer/timer"
import TimeSpent from "./components/TimeSpent/TimeSpent"

function App() {
  return (
    <div className={styles.content}>
      <NavBar></NavBar>
      <CategoryDisplay></CategoryDisplay>
      <Timer></Timer>
      <TimeSpent></TimeSpent>
    </div>
  )
}

export default App
