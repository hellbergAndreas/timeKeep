import React, { useCallback } from "react"
import { withRouter } from "react-router"
import fireApp, { firebaseCreateUser } from "../firebase/firebase.utils"
import { useEffect } from "react"
import { useContext } from "react"
import { AuthContext } from "../AuthContext"

const SignUp = ({ history }) => {
  const { currentUser } = useContext(AuthContext)
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault()
      const { email, password } = event.target.elements
      try {
        await fireApp
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value)
        history.push("/")
      } catch (error) {
        alert(error)
      }
    },
    [history]
  )
  useEffect(() => {
    console.log("setting user to db")
    currentUser && firebaseCreateUser(currentUser.email, currentUser.uid)
  }, [currentUser])
  return (
    <div>
      <h2>Sign up</h2>
      <form onSubmit={handleSignUp}>
        <div>
          <label for="email">email</label>
          <input name="email"></input>
        </div>
        <div>
          <label for="password">password</label>
          <input name="password" type="password"></input>
        </div>
        <button type="submit">Sign up</button>
      </form>
    </div>
  )
}

export default withRouter(SignUp)
