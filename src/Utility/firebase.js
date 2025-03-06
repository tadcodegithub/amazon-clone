// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app"
import firebase from "firebase/compat/app"
import { getAuth } from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  //this is your configration
}

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = app.firestore
