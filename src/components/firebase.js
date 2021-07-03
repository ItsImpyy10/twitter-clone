import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBc5T4pN-CXHrO6dCR7H1daPf4HqHhoYTE",
    authDomain: "twitter-clone-aaad1.firebaseapp.com",
    projectId: "twitter-clone-aaad1",
    storageBucket: "twitter-clone-aaad1.appspot.com",
    messagingSenderId: "41313688974",
    appId: "1:41313688974:web:6821e25f70afb5a15e58df",
    measurementId: "G-LKLDSQHWZM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()

  export default db