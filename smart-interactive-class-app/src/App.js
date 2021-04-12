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


// write firebase API here 12Apr xy

// const auth=firebase.auth();
// const firestore=firebase.firestore();

// cost [user] = useAuthState(auth);

// function SingIn(){
//   const signInWithEmail=()=>{
//     //const provider = new firebase.auth.
//   }
//   return(
//     <button onClick={signInWithEmail}>Sign in with Email</button>
//   )
// }

//-------------------------------------------------
function App() {
  //[variable name, funtion name]
  const [userType, setUserType] = useState("");
  const [classData, setClassData] = useState({});

  // property 
  const onClickSignUp = (userType) => {
    //set method 
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
