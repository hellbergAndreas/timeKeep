import React from "react"
import { useContext } from "react"
import { AuthContext } from "../AuthContext"
import { useEffect } from "react"
import { useHistory } from "react-router-dom"
import fireApp, {
  db,
  firebaseCreateTimeObject,
  firebaseCreateUser,
} from "../firebase/firebase.utils"
import { connect } from "react-redux"
import { addFirebaseTimeObject } from "../redux/timeReducer/time.action"

const objec = {
  drawingFormAndShapes: {
    "cube slices": [{ date: "pre", time: 4773 }],
    "handles on cups": [{ data: "pre", time: 7858 }],
    "volumetric stills": [{ data: "pre", time: 1615 }],
  },
  drawingBasics: {
    cubes: [{ date: "pre", time: 1290 }],
    spheres: [{ date: "pre", time: 1222 }],
  },

  drawingProportions: {
    proportion: [
      { date: "pre", time: 2727 },
      { date: "pre", time: 23 },
    ],
  },
  drawingContours: {
    "block in": [{ date: "pre", time: 3153 }],
    "cross-contour": [{ date: "pre", time: 5297 }],
    foreshortening: [{ date: "pre", time: 4228 }],
  },
}

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
    // currentUser && firebaseCreateTimeObject("time", currentUser.uid, objec)
  }, [])

  return <div>{children}</div>
}

const mapDispatchToProps = (dispatch) => ({
  addFirebaseTimeObject: (time) => dispatch(addFirebaseTimeObject(time)),
})

export default connect(null, mapDispatchToProps)(StartPage)
