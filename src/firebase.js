// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAPPUKaZOEDYW6tY5Ol3rJYAbb8mqOucf8",
  authDomain: "ocaze-aa6b6.firebaseapp.com",
  projectId: "ocaze-aa6b6",
  storageBucket: "ocaze-aa6b6.appspot.com",
  messagingSenderId: "812689563001",
  appId: "1:812689563001:web:5b074c4501cdc876cfe3a8",
  measurementId: "G-8J7NL2RPLX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
//const provider = new firebase.auth.FacebookAuthProvider();
export { auth, provider }
export default db;