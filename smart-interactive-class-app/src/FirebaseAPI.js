import firebase from 'firebase/app';

import "firebase/auth"
import "firebase/firestore";
import 'firebase/database';

const initFirebase = {
  apiKey: "AIzaSyB8QiVeO7MOXOOT3NlMx_jcSPIqwhI10fE",
  authDomain: "escproject-fdba0.firebaseapp.com",
  databaseURL: "https://escproject-fdba0-default-rtdb.firebaseio.com",
  projectId: "escproject-fdba0",
  storageBucket: "escproject-fdba0.appspot.com",
  messagingSenderId: "639100449155",
  appId: "1:639100449155:web:18fcc17ae1620ed1db46b6",
  measurementId: "G-9HSYNE4KH6"
};


if (!firebase.apps.length) {
  firebase.initializeApp(initFirebase);
}

export const SignUp = ({ name, email, password, userType }) => {
  if (userType === 'instructor') {
    //authentication functions

    //write intstuctor user data to rtdb
  } else if (userType === 'student') {

  } else {
    console.log('Error in signing up') // try catch 
  }
}

export default firebase;
