import firebase from 'firebase/app';
import ListTile from "../Components/ClassListTile2";
import StudentAddClass from "../Components/StudentAddClass";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Grid, Button, List } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { onStudentAddClass } from "../FirebaseAPI"

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
  const [classes, setClasses] = useState([]);

  useEffect(async () => { 
    var user = firebase.auth().currentUser.displayName;
    console.log(user)
    try {
      const ref = firebase.database().ref("studentUser/" + user + "/classes");
      const classList = await ref.once("value").then(function (snapshot) {
        return Object.keys(snapshot.toJSON());
      });
      const classLs = [];
      for (var i=0; i<classList.length; i++) {
        const ref = firebase.database().ref("classes/"+classList[i]);
        const classT= await ref.once("value").then(function (snapshot) {
          return snapshot.val();
        });
        const classCode = classList[i];
        const classTitle = classT["classTitle"];
        const newClass = { classCode, classTitle };
        classLs.push(newClass)
      }
      setClasses(classLs);
    } catch (e) {
      console.log(e);
    }
    
  }, []);

  const getClasses = async () => {
    var user = firebase.auth().currentUser.displayName;
    try {
      const ref = firebase.database().ref("studentUser/" + user + "/classes");
      const classList = await ref.once("value").then(function (snapshot) {
        return Object.keys(snapshot.toJSON());
      });
      const classLs = [];
      for (var i=0; i<classList.length; i++) {
        const ref = firebase.database().ref("classes/"+classList[i]);
        const classT= await ref.once("value").then(function (snapshot) {
          return snapshot.val();
        });
        const classCode = classList[i];
        const classTitle = classT["classTitle"];
        const newClass = { classCode, classTitle };
        classLs.push(newClass)
      }
      setClasses(classLs);
    } catch (e) {
      console.log(e);
    }
    console.log(classes)
  }

  const onAdd = (classCode) => {
    var user = firebase.auth().currentUser.displayName;
    onStudentAddClass(classCode, user);
    getClasses();
  };


  return (
    <div className={style.page}>
      <header className={style.header}>
        <StudentAddClass onAdd={onAdd} />
        <h1>Student Dashboard</h1>
        <Button
          id = 'logout'
          className={style.button}
          endIcon={<ExitToAppIcon />}
          to={"/"}
          component={Link}
        >
          Log Out
        </Button>
      </header>
      <Button className={style.button} onClick={getClasses}>Refresh</Button>
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
