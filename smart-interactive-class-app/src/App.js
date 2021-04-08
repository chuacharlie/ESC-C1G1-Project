import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
//import notfound from "./Pages/notfound";
import ProfDashboard from "./Pages/ProfDashboard";
import React, { useState } from "react";
import StudentDashboard from "./Pages/StudentDashboard";
import ProfViewClass from "./Pages/ProfViewClass";
//xy

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

import StudentSlides from "./Pages/StudentSlides";
import PostLectureRating from "./Pages/PostLectureRating";
import SignUpPage from "./Pages/SignUpPage";

firebase.initializeApp({
  apiKey: "AIzaSyB8QiVeO7MOXOOT3NlMx_jcSPIqwhI10fE",
  authDomain: "escproject-fdba0.firebaseapp.com",
  databaseURL: "https://escproject-fdba0-default-rtdb.firebaseio.com",
  projectId: "escproject-fdba0",
  storageBucket: "escproject-fdba0.appspot.com",
  messagingSenderId: "639100449155",
  appId: "1:639100449155:web:d1ddbdfdf2d148b3db46b6",
  measurementId: "G-VL46L5KBHS",
});

// const auth=firebase.auth();
// const firestore=firebase.firestore();

// cost [user] = useAuthState(auth);

// function SingIn(){
//   const signInWithEmail=()=>{
//     //const provider = new firebase.auth.G
//   }
//   return(
//     <button onClick={signInWithEmail}>Sign in with Email</button>
//   )
// }

//-------------------------------------------------
function App() {
  const [userType, setUserType] = useState("");
  const [classData, setClassData] = useState({});

  const onClickSignUp = (userType) => {
    setUserType(userType);
    console.log(userType);
  };

  const onClickClass = (classData) => {
    setClassData(classData);
  };

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <>{<LoginPage onClickSignUp={onClickSignUp} />}</>}
        />
        <Route path="/StudentDashboard" component={StudentDashboard} />
        <Route
          path="/ProfDashboard"
          render={() => <>{<ProfDashboard onClickClass={onClickClass} />}</>}
        />
        <Route
          path={`/ProfViewClass:${classData.classCode}`}
          render={() => <>{<ProfViewClass classData={classData} />}</>}
        />
        <Route path="/StudentSlidesURL" component={StudentSlides} />
        <Route path="/PostLectureURL" component={PostLectureRating} />
        <Route
          exact
          path="/SignUpPage"
          render={() => <>{<SignUpPage userType={userType} />}</>}
        />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default App;
