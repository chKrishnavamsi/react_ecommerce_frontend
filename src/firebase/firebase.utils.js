import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyCWNFL4fj6Ed0I5UhF0uCHiFOkKFL77FOA",
  authDomain: "react-frontend-a35b2.firebaseapp.com",
  projectId: "react-frontend-a35b2",
  storageBucket: "react-frontend-a35b2.appspot.com",
  messagingSenderId: "674304028749",
  appId: "1:674304028749:web:6dc873626b3ac2a42cec04",
  measurementId: "G-5D1D70HG5N",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore= firebase.firestore();

const provider= new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const siginInWithGoogle= ()=>auth.signInWithPopup(provider);

export default firebase;
