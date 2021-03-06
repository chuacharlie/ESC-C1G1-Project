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
import StudentViewClass from "./Pages/StudentViewClass";
//xy

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

import StudentSlides from "./Pages/StudentSlides";
import PostLectureRating from "./Pages/PostLectureRating";
import SignUpPage from "./Pages/SignUpPage";

function App() {
  const [instructorEmail, setInstructorEmail] = useState("");
  const [studentEmail, setStudentEmail] = useState("");

  const [userType, setUserType] = useState("");
  const [classData, setClassData] = useState({});
  const [classData2, setClassData2] = useState({});

  const onClickSignUp = (userType) => {
    setUserType(userType);
    console.log(userType);
  };

  const onClickClass = (classData) => {
    setClassData(classData);
  };
  const onClickClass2 = (classData2) => {
    console.log(classData2);
    setClassData2(classData2);
  };

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <>
              {
                <LoginPage
                  onClickSignUp={onClickSignUp}
                  instructorEmail={instructorEmail}
                  setInstructorEmail={setInstructorEmail}
                  studentEmail={studentEmail}
                  setStudentEmail={setStudentEmail}
                />
              }
            </>
          )}
        />
        <Route
          path="/StudentDashboard"
          render={() => (
            <>{<StudentDashboard onClickClass2={onClickClass2} />}</>
          )}
        />

        <Route
          path="/ProfDashboard"
          render={() => (
            <>
              {
                <ProfDashboard
                  onClickClass={onClickClass}
                  profEmail={instructorEmail}
                />
              }
            </>
          )}
        />
        <Route
          path={`/ProfViewClass:${classData.classCode}`}
          render={() => <>{<ProfViewClass classData={classData} />}</>}
        />
        <Route
          path={`/StudentViewClass:${classData.classCode}`}
          render={() => <>{<StudentViewClass classData2={classData2} />}</>}
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
