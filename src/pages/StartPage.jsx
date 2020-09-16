import React from "react"
import { useContext } from "react"
import { AuthContext } from "../AuthContext"
import { useEffect } from "react"
import { useHistory } from "react-router-dom"
import fireApp, { db } from "../firebase/firebase.utils"

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
      //   const database = .getInstance()
      //   console.log(database)
    }
  }, [])

  return <div>{children}</div>
}

export default StartPage
