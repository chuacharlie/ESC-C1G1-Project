import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const initFirebase = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN ,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL ,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.ACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGEING_SENDER_ID ,
    appId: process.env.REACT_APP_FIREBASE_APP_ID ,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  })

  //authentication instances
  //might need to change, see documentation 
  //export const auth = app.auth();
  //export default app;

  export const SignUp = ({name, email, password, userType}) => {
    if (userType === 'instructor') {
      //authentication functions

      //write intstuctor user data to rtdb
    } else if (userType === 'student') {

    } else {
      console.log('Error in signing up') // try catch 
    }
  }
