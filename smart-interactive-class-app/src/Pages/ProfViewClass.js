import ListOfStudents from "./ListOfStudents";
import Feedback from "./Feedback";
import Quizzes from "./Quizzes";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Grid,
  Paper,
  Button,
  TextField,
  Tabs,
  Tab,
  AppBar,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { spacing } from "@material-ui/system";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import HomeIcon from "@material-ui/icons/Home";
import { useLocation } from "react-router-dom";
import firebase from "../FirebaseAPI";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
  },
  page: {
    width: "80%",
    alignItems: "center",
    margin: "auto",
  },
  button: {
    backgroundColor: "white",
    borderRadius: 50,
    margin: "8px 16px 0 0",
    color: "#f06292",
  },
  indicator: {
    backgroundColor: "#f06292",
  },
}));

const ProfViewClass = ({ classData }) => {
  const style = useStyles();
  const [selectedTab, setSelectedTab] = useState(0);
  const [title, setTitle] = useState("");
  const [classId, setclassId] = useState("");
  const [students, setStudents] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const location = useLocation();

  const getStudents = () => {
    setStudents();
  };

  const getFeedbacks = () => {
    setFeedbacks();
  };

  useEffect(() => {
    let pathname = location.pathname.split(':');
    let ClassId = ''
    ClassId = pathname[pathname.length - 1];
    console.log(ClassId);
    console.clear();
    console.log('*-*-*-*-*-*-');
    console.log(ClassId);

    const firestore = firebase.firestore();


    firestore
    .collection('classes')
    .doc(ClassId)
    // .where("classId", "==", '0SwdOrQ9L2PSiOgR6xh3')
    .get()
    .then(docs => {
      const data = docs.data();
      console.log(docs.data())
      setTitle(data.classTitle)
      setclassId(ClassId)
      // const postData = [];
      // docs.forEach((doc) => postData.push({ ...doc.data(), classCode: doc.id }));
      // console.log(postData);  // <------
      // setClasses(postData);
    })
    // setclassId(ClassId)
  }, [])

  const handleChange = (e, newSelectedTab) => {
    // if (newSelectedTab == 0 && students.length == 0) {
    //   getStudents();
    // }

    // if (newSelectedTab == 1 && feedbacks.length == 0) {
    //   getFeedbacks();
    // }
    setSelectedTab(newSelectedTab);
  };

  return (
    <div className={style.page}>
      <header className={style.header}>
        <IconButton
          className={style.button}
          to={"/ProfDashboard"}
          component={Link}
        >
          <ArrowBackIosIcon />
          <HomeIcon />
        </IconButton>
        <h1>
          {console.clear()}
          {console.log(classData)}
          {/* {classData.classTitle + " (Class code: " + classData.classCode + ")"} */}
          {title + " (Class code: " + classId + ")"}
        </h1>
      </header>

      <Tabs
        value={selectedTab}
        onChange={handleChange}
        classes={{ indicator: style.indicator }}
      >
        <Tab label="Students" />
        <Tab label="Feedback" />
        <Tab label="Quizzes" />
      </Tabs>
      {selectedTab === 0 && <ListOfStudents classData={classData} />}
      {selectedTab === 1 && <Feedback classData={classData} />}
      {selectedTab === 2 && <Quizzes classData={classData} />}
    </div>
  );
};

export default ProfViewClass;

