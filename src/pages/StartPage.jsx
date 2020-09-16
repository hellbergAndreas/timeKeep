import React from "react"
import { useContext } from "react"
import { AuthContext } from "../AuthContext"
import { useEffect } from "react"
import { useHistory } from "react-router-dom"
import fireApp, { db, firebaseCreateUser } from "../firebase/firebase.utils"
import { connect } from "react-redux"
import { addFirebaseTimeObject } from "../redux/timeReducer/time.action"

const StartPage = ({ children, addFirebaseTimeObject }) => {
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
          addFirebaseTimeObject(snapshot.data())
        })
        .catch((error) => console.log(error))
    }
  }, [])

  return <div>{children}</div>
}

const mapDispatchToProps = (dispatch) => ({
  addFirebaseTimeObject: (time) => dispatch(addFirebaseTimeObject(time)),
})

export default connect(null, mapDispatchToProps)(StartPage)
