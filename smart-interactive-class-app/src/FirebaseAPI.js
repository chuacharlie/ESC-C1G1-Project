import firebase from 'firebase/app';

import "firebase/auth"
import "firebase/firestore";
import 'firebase/database';
import 'firebase/messaging';
import { useState } from 'react';

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

const database = firebase.database();

export function onProfAddClass(classCode, classTitle, profName) {
  //write to classes
  database.ref("classes/" + classCode).set({
    classTitle: classTitle,
  });
  //write to prof.class
  database.ref("profUser/" + profName + "/classes/" + classCode).set({
    classTitle: classTitle,
  });
};

export async function onStudentAddClass(classCode, studentId) {
  //write to classes
  const ref = firebase.database().ref("classes/");
  const classList = await ref.once("value").then(function (snapshot) {
    return Object.keys(snapshot.toJSON());
  });
  // const ref = database.ref("classes/" + classCode);
  if (classList.includes(classCode)) {
    const ref = database.ref("classes/" + classCode);
    const classObj= await ref.once("value").then(function (snapshot) {
      return snapshot.val();
    });
    const classTitle = classObj["classTitle"]
    addClassStudent(classCode, studentId);
    //write to prof.class
    database.ref("studentUser/" + studentId + "/classes/" + classCode).set({
      classTitle: classTitle,
    });
  }
};

export function addFeedback(classCode, feedback, studentId) {
  database.ref("classes/" + classCode + "/feedbacks").push({
    datetime:Date().toLocaleString(),
    feedback:feedback,
    from:studentId,
  })
};

export async function addQuiz(classCode, data) {
  const ref = database.ref("classes/" + classCode + "/quizzes/");
  const id = await ref.once("value").then(function (snapshot) {
    return snapshot.numChildren();
  });
  if (data.type == "MCQ") {
    database.ref("classes/" + classCode + "/quizzes/" + id).set({
      correctAns:data.correctAns,
      datetime:data.datetime,
      numOfOptions:data.numOfOptions,
      qn:data.qn,
      responses:data.responses,
      type:data.type
    });
  } else if (data.type = "open") {
      database.ref("classes/" + classCode + "/quizzes/" + id).set({
        datetime:data.datetime,
        qn:data.qn,
        responses:data.responses,
        type:data.type
      });
  }
  // for responses:
  // - if mcq:
  //    data.correctAns = index of data.responses
  //    data.responses = [val1,val2,val3,val4]
  // - if open:
  //    data.responses = [{ans:"hi",student:"boo"},{ans:"hi2",student:"boo2"}]
}

export function addClassStudent(classCode, studentId) {
  database.ref("classes/" + classCode + "/studentList/" + studentId).set({
    qnCount:0,
    quizCount:0,
    score:0,
  });
}

export function addInstructor(email, name) {
  database.ref("profUser/" + name).set({
    email:email,
  });
}

export function addStudent(studentId, email, name) {
  database.ref("studentUser/" + studentId).set({
    email:email,
    name:name,
  });
}

export async function getClasses(profName) {
  const ref = database.ref("profUser/" + profName + "/classes");
  const classList = await ref.once("value").then(function (snapshot) {
    return snapshot.toJSON();
  });
  // console.log(classList)
  return classList
}

export const messaging = firebase.messaging();
export const getToken = (setTokenFound) => {
  return messaging.getToken({vapidKey: 'BEGGy-tP60Z9PhG_ReLIxzmU_rXEEb8m_xJkuP6D4Kj9GX-JRYJJOn6J1FtcZ403ocKoW3VCIY_G_OOGj4U-LwM'}).then((currentToken) => {
    if (currentToken) {
      console.log('current token for client: ', currentToken);
      setTokenFound(true);
      // Track the token -> client mapping, by sending to backend server
      // show on the UI that permission is secured
    } else {
      console.log('No registration token available. Request permission to generate one.');
      setTokenFound(false);
      // shows on the UI that permission is required 
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // catch error while creating client token
  });
}

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
});

export default firebase;
