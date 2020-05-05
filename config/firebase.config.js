import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "XXX",
    authDomain: "XXX",
    databaseURL: "XXX",
    projectId: "XXX",
    storageBucket: "XXX",
    messagingSenderId: "XXX",
    appId: "XXX"
}

// Initialize Firebase
const FirebaseApp = firebase.initializeApp(firebaseConfig)

export default FirebaseApp