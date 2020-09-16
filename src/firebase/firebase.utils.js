import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
  apiKey: "AIzaSyAHV9kYflji82JaaIW5sMhNI6Cz9Mnw4aQ",
  authDomain: "timekeep-44914.firebaseapp.com",
  databaseURL: "https://timekeep-44914.firebaseio.com",
  projectId: "timekeep-44914",
  storageBucket: "timekeep-44914.appspot.com",
  messagingSenderId: "174415094402",
  appId: "1:174415094402:web:f7cfaccc5f1074e102ca9b",
}

const fireApp = firebase.initializeApp(config)
const db = fireApp.firestore()
export { db }

export const createTimeObject = (collectionKey, time, user) => {
  db.collection(collectionKey).doc(user).set({
    time,
    id: user,
  })
}

export default fireApp
