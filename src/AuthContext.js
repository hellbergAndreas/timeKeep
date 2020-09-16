import React, { useState, useEffect, createContext } from "react"
import fireApp from "./firebase/firebase.utils"

export const AuthContext = createContext()

const Auth = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    fireApp.auth().onAuthStateChanged(setCurrentUser)
  }, [])

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  )
}
export default Auth
