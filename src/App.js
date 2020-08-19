import React, { useState } from "react"

import NavBar from "./containers/NavBar/NavBar"
import styles from "./index.module.css"
import CategoryDisplay from "./containers/categoryDisplay/CategoryDisplay"
import AddCategoryCard from "./containers/addCategoryCard/AddCategoryCard"
import Timer from "./components/Timer/timer"

function App() {
  return (
    <div className={styles.content}>
      <NavBar></NavBar>
      <CategoryDisplay></CategoryDisplay>
      <AddCategoryCard></AddCategoryCard>
      <Timer></Timer>
    </div>
  )
}

export default App
