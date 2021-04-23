import ListTile from "../Components/ClassListTile";
import ProfAddClass from "../Components/ProfAddClass";

import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import { Grid, Button, List, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
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

const ProfDashboard = ({ onClickClass }) => {
  const style = useStyles();
  const [classname, setclassName] = useState("");
  const [random, setRandom] = useState(Math.random());
  const location = useLocation();
  const addClassref = useRef(null);
  const [instructorID, setinstructorID] = useState(localStorage.getItem('profUID'));

  // let instructorID = localStorage.getItem('profUID')
  
  const [classes, setClasses] = useState([
    { classTitle: "Dummy Class 101", classCode: 1234 },
  ]);

  useEffect(() => {
    // listen for auth state changes
    const firestore = firebase.firestore();
    console.clear();
    console.log(instructorID)
    // const instructorID = location.state.profUID

    let isSubscribed = true;

    if (isSubscribed) {
      firestore
        .collection('classes')
        .where("instructorID", "==", instructorID)
        .get()
        .then(docs => {
          const postData = [];
          docs.forEach((doc) => postData.push({ ...doc.data(), classCode: doc.id }));
          console.log(postData);  // <------
          setClasses(postData);
        })
    }

    return () => isSubscribed = false
  }, [random])

  const onAdd = (classTitle) => {
    setclassName(classTitle);

    const firestore = firebase.firestore();
    const id = firestore.collection('classes').doc().id;
    // const instructorID = location.state.profUID

    if (classTitle === '') {
      alert('Please enetr class title')
    } else {
      firestore.collection('classes').doc(id).set({
        classTitle: classTitle,
        instructorID: instructorID,
        classId: id
      }).then(function () {
        console.log("Document successfully written!");
        alert("Classes created");
        setRandom(Math.random())
      })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });
    }

  };

  return (
    <div className={style.page}>
      <header className={style.header}>
        <ProfAddClass ref={addClassref} onAdd={onAdd} />
        <h1>Instructor Dashboard</h1>
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
              <ListTile classData={c} onClick={onClickClass} />
            ))}
          </>
        ) : (
          "No class added"
        )}
      </List>
    </div>
  );
};

export default ProfDashboard;
