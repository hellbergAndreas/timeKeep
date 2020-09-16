import React from "react"
import { useState } from "react"
import { useContext } from "react"
import Auth, { AuthContext } from "../AuthContext"
import { useCallback } from "react"
import fireApp from "../firebase/firebase.utils"
import { withRouter, Redirect } from "react-router"

const LoginPage = ({ history }) => {
  const { currentUser } = useContext(AuthContext)

  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault()
      const { email, password } = event.target.elements
      try {
        await fireApp
          .auth()
          .signInWithEmailAndPassword(email.value, password.value)
        history.push("/")
      } catch (error) {
        alert(error)
      }
    },
    [history]
  )
  if (currentUser) {
    return <Redirect to="/" />
  }
  return (
    <div>
      <form onSubmit={handleLogin}>
        <div>
          <label for="email">email</label>
          <input type={"email"} name={"email"}></input>
        </div>
        <div>
          <label for="password">password</label>
          <input name={"password"}></input>
        </div>
        <button>Log in</button>
      </form>
    </div>
  )
}

export default withRouter(LoginPage)
