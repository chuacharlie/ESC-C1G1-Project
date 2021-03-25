import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
//import notfound from "./Pages/notfound";
import ProfDashboard from "./Pages/ProfDashboard"
import React, {Component} from "react";
import StudentDashboard from "./Pages/StudentDashboard"
//xy
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';

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
//edit login page name
const LoginCheckPage=(props) =>{
  const history=useHistory;
  const [credentials,setCredentials]=useState({email:"",password:""});
  return <div>
        <input
            value={credentials.email}
            type="text"
            placeholder='Please enter your e-mail address'
            onChange={event => setCredentials({email: event.target.value, password: credentials.password})}
        />
        <input
            value={credentials.password}
            type="password"
            placeholder='enter your password'
            onChange={event => setCredentials({email: credentials.email, password: event.target.value})}
        />
        <button
            disabled={ !(/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/.test(credentials.email)) }
            onClick={()=>{
              if (credentials.password === "let-me-in")
                history.push("/secret");
            }}
        >Login</button>
    </div>
}

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

      {// <Route exact path = "/404" component = {notfound}/> /.//
  }
      <Route exact path = "/StudentDashboard" component = {StudentDashboard} />
      <Route exact path = "/ProfDashboard" component = {ProfDashboard} />
      <Redirect to = "/404"/>     

     
      </Switch>
    </Router>
  );
}
}

export default App;
