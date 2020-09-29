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

export const firebaseCreateTimeObject = (collectionKey, user, time) => {
  db.collection(collectionKey).doc(user).set(time)
}

export const firebaseDeleteCategory = (collectionKey, id, activeCategory) => {
  const categoryRef = db.collection(collectionKey).doc(id)
  categoryRef.update({
    [activeCategory]: firebase.firestore.FieldValue.delete(),
  })
}
export const firebaseAddEntry = (
  id,
  collectionKey,
  activeCategory,
  subCategory,
  subCatEntries,
  entry
) => {
  console.log("adds time entry")
  db.collection(collectionKey)
    .doc(id)
    .update({
      [`${activeCategory}.${subCategory}`]: [...subCatEntries, entry],
    })
}
export const firebaseCreateUser = (user, userId) => {
  db.collection("users").doc(user).set({
    userEmail: user,
    userId: userId,
  })
}

export default fireApp
