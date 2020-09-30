import React, { useState, useEffect, createContext } from "react"
import fireApp from "./firebase/firebase.utils"

export const AuthContext = createContext()

// auth wraps the entire app giving currentUser as context
const Auth = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [entryContext, setEntry] = useState({ time: 0 })

  useEffect(() => {
    fireApp.auth().onAuthStateChanged(setCurrentUser)
  }, [])

  return (
    <AuthContext.Provider
      value={{ currentUser, setCurrentUser, entryContext, setEntry }}
    >
      {children}
    </AuthContext.Provider>
  )
}
export default Auth
