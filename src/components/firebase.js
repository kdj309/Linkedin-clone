import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB6grNNkSbg6Jko2XC4qLmoJ0p4RWSiifM",
  authDomain: "linkedin-clone-24308.firebaseapp.com",
  projectId: "linkedin-clone-24308",
  storageBucket: "linkedin-clone-24308.appspot.com",
  messagingSenderId: "451075352096",
  appId: "1:451075352096:web:ce085bb6bf8fa95488be45"
})
let auth=firebaseApp.auth()
let db=firebaseApp.firestore()
let provider=new firebase.auth.GoogleAuthProvider()
export default firebaseApp
export {auth,db,provider}