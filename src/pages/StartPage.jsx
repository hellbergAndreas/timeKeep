import React from "react"
import { useContext } from "react"
import { AuthContext } from "../AuthContext"
import { useEffect } from "react"
import { useHistory } from "react-router-dom"
import fireApp, { db, firebaseCreateUser } from "../firebase/firebase.utils"

const StartPage = ({ children }) => {
  const history = useHistory()
  const { currentUser } = useContext(AuthContext)

  useEffect(() => {
    if (currentUser === null) {
      history.push("/login")
    }
  }, [currentUser])

  useEffect(() => {
    if (currentUser) {
      db.collection(`time`)
        .doc(currentUser.uid)

        .get()
        .then((snapshot) => {
          console.log(snapshot.data())
        })
        .catch((error) => console.log(error))
    }
  }, [])

  return <div>{children}</div>
}

export default StartPage
