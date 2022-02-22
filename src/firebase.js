// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwStU-6gXUQDtM_AiyO4jDOKVjNRSzsvQ",
  authDomain: "clone-b16f4.firebaseapp.com",
  projectId: "clone-b16f4",
  storageBucket: "clone-b16f4.appspot.com",
  messagingSenderId: "3322399828",
  appId: "1:3322399828:web:887e34b8d2807d2bf0b1c1",
  measurementId: "G-GHENYMG05B",
};

const firebaseApp=firebase.initializeApp(firebaseConfig)

const db=firebaseApp.firestore()

const auth=firebase.auth()

export {db,auth}
