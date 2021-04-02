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
import ProfDashboard from "./Pages/ProfDashboard"
import React, {Component} from "react";
import StudentDashboard from "./Pages/StudentDashboard"
//xy

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';

import ProfPresentation from "./Pages/ProfPresentation";
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
    measurementId: "G-VL46L5KBHS"
}
)


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
class App extends Component{
  render(){
    return (
    <Router>
      <Switch>
          <Route exact path = "/" component ={LoginPage}/>
          <Route exact path="/StudentDashboard" component={StudentDashboard} />
          <Route exact path="/ProfDashboard" component={ProfDashboard} />
          <Route
            exact
            path="/ProfPresentationURL"
            component={ProfPresentation}
          />
          <Route exact path="/StudentSlidesURL" component={StudentSlides} />
          <Route exact path="/PostLectureURL" component={PostLectureRating} />
          <Route exact path="/SignUpPage" component={SignUpPage} />
          <Redirect to="/404" />
      </Switch>
    </Router>
    );
  }
}

export default App;
