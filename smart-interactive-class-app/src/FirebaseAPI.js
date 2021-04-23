import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import "firebase/messaging";

const initFirebase = {
  apiKey: "AIzaSyB8QiVeO7MOXOOT3NlMx_jcSPIqwhI10fE",
  authDomain: "escproject-fdba0.firebaseapp.com",
  databaseURL: "https://escproject-fdba0-default-rtdb.firebaseio.com",
  projectId: "escproject-fdba0",
  storageBucket: "escproject-fdba0.appspot.com",
  messagingSenderId: "639100449155",
  appId: "1:639100449155:web:18fcc17ae1620ed1db46b6",
  measurementId: "G-9HSYNE4KH6",
};

if (!firebase.apps.length) {
  firebase.initializeApp(initFirebase);
}

export const messaging = firebase.messaging();

export const SignUp = ({ name, email, password, userType }) => {
  if (userType === "instructor") {
    //authentication functions
    //write intstuctor user data to rtdb
  } else if (userType === "student") {
  } else {
    console.log("Error in signing up"); // try catch
  }
};

// export var deviceToken = "";
// export const getDeviceToken = () => {
//   return deviceToken;
// }

export const getToken = (setTokenFound) => {
  return messaging
    .getToken({
      vapidKey:
        "BEGGy-tP60Z9PhG_ReLIxzmU_rXEEb8m_xJkuP6D4Kj9GX-JRYJJOn6J1FtcZ403ocKoW3VCIY_G_OOGj4U-LwM",
    })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        // deviceToken = currentToken;
        setTokenFound(true);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log(
          "No registration token available. Request permission to generate one."
        );
        setTokenFound(false);
        // shows on the UI that permission is required
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
      // catch error while creating client token
    });
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });

export function onNewQuiz(classCode) {
  //push quiz data to corresponding class
}

export function getNewQuiz() {
  //listen for new quiz and get the question details
  //pass the quiz qn and type to render on StudentViewClass
}

export function onStudentAnswerQuiz() {
  //If MCQ && correct ans, add one point to student's score, add 1 to the option selected under responses
  //else if MCQ && wrong ans, add 1 to option selected under responses
}

export function onSignUp() {
  //check usertype is instructor or student
  //create student user or instructor user
}

export function onStudentJoinClass() {
  //update class' student list with student
  //update student
}

export default firebase;
