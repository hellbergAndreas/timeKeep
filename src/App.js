import React from "react"

import NavBar from "./containers/NavBar/NavBar"
import styles from "./index.module.css"
import CategoryDisplay from "./containers/categoryDisplay/CategoryDisplay"

import Timer from "./components/Timer/timer"
import TimeSpent from "./components/TimeSpent/TimeSpent"
import LoginPage from "./pages/LoginPage"
import { Link, Route, Switch } from "react-router-dom"
import Auth from "./AuthContext"
import SignUp from "./pages/SignUp"
import fireApp from "./firebase/firebase.utils"
import StartPage from "./pages/StartPage"
import { connect } from "react-redux"
import { resetTimeObject } from "./redux/timeReducer/time.action"

function App({ resetTimeObject, time }) {
  const handleSignOut = () => {
    resetTimeObject({})
    fireApp.auth().signOut()
  }
  return (
    <div className={styles.content}>
      <Auth>
        <Switch>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/login">
            <LoginPage></LoginPage>
          </Route>
          <Route path="/">
            <StartPage>
              <NavBar></NavBar>
              <CategoryDisplay></CategoryDisplay>
              <Timer></Timer>
              <TimeSpent></TimeSpent>
            </StartPage>
          </Route>
        </Switch>
      </Auth>
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  resetTimeObject: (time) => dispatch(resetTimeObject(time)),
})
const mapStateToProps = (state) => ({
  time: state.time,
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
