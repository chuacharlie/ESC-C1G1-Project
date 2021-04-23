import ListTile from "../Components/ClassListTile";
import StudentAddClass from "../Components/StudentAddClass";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Grid, Button, List } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import firebase from "../FirebaseAPI";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  box: {
    width: "100%",
    height: "20%",
    margin: "auto",
  },
  page: {
    width: "80%",
    alignItems: "center",
    margin: "auto",
  },
  button: {
    backgroundColor: "white",
    borderRadius: 20,
    margin: "0 16px 0 30px",
    color: "#f06292",
  },
  header: {
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
  },
}));

const StudentDashboard = ({onClickClass2}) => {
  const style = useStyles();
  const location = useLocation();
  // const studentID = String(localStorage.getItem('studentID'));
  // const studentID = location.state.studUID;
  const [studentID, setstudentID] = useState(localStorage.getItem('studUID'));

  const [random, setRandom] = useState(Math.random());

  const [classes, setClasses] = useState([
    { classTitle2: "Dummy Class 101", classCode: 1234 },
  ]);

  useEffect(() => {
    const firestore = firebase.firestore();

    let isSubscribed = true;
    console.log(studentID)
    if (isSubscribed) {
      const unsubscribe = firestore
        .collection('classes')
        .where("studentsInClass", "array-contains", studentID)
        .get()
        .then(docs => {
          const postData = [];
          docs.forEach((doc) => postData.push({ classTitle2: doc.data().classTitle, classCode: doc.id }));
          console.log(postData);  // <------
          setClasses(postData);
        })
    }

    return () => isSubscribed = false

    // unsubscribe to the listener when unmounting
    // return () => unsubscribe()
  }, [random])
  

  const onAdd = (classTitle2) => {
    const firestore = firebase.firestore();
    // const studentID = location.state.studUID;
    if(classTitle2 === '') {
      alert('Please enetr class title')
    } else {
      firestore
      .collection('classes')
      .where("classTitle", "==", classTitle2)
      .get()
      .then(docs => {
        docs.forEach(doc => {
          const data = doc.data();
          const classesRef = firestore.collection("classes").doc(doc.id);

          if (!data.studentsInClass) {
            classesRef.update({
              studentsInClass: [studentID]
            })
              .then(function () {
                console.log("Document successfully written!");
                setRandom(Math.random())
                alert("Sucessfully join class")
              });
          } else {
            let idArray = []
            idArray = data.studentsInClass;
            idArray.push(studentID);
            console.log(idArray)
            classesRef.update({ studentsInClass: idArray })
              .then(function () {
                console.log("Document successfully written!");
                setRandom(Math.random())
                alert("Sucessfully join class")
              });
          }
        })
      })
      .catch(err => console.log(err))
    }
   
    // const classCode = Math.floor(Math.random() * 10000) + 1;
    // const newClass = { classCode, classTitle2 };
    // setClasses([...classes, newClass]);
  };



  return (
    <div className={style.page}>
      <header className={style.header}>
        <StudentAddClass onAdd={onAdd} />
        <h1>Student Dashboard</h1>
        <Button
          className={style.button}
          endIcon={<ExitToAppIcon />}
          to={"/"}
          component={Link}
        >
          Log Out
        </Button>
      </header>

      <List>
        {classes.length > 0 ? (
          <>
            {classes.map((c) => (
              <ListTile classData2={c} onClick2={onClickClass2} />
            ))}
          </>
        ) : (
          "No class added"
        )}
      </List>
    </div>
  );
}

export default StudentDashboard;
