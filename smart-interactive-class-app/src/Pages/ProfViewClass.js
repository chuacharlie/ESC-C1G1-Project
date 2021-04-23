import ListOfStudents from "./ListOfStudents";
import Feedback from "./Feedback";
import Quizzes from "./Quizzes";

import { getToken, onMessageListener } from "../FirebaseAPI";
import Toast from "react-bootstrap/Toast";

import { useState } from "react";
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
  const [students, setStudents] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);

  const getStudents = () => {
    setStudents();
  };

  const getFeedbacks = () => {
    setFeedbacks();
  };

  const handleChange = (e, newSelectedTab) => {
    // if (newSelectedTab == 0 && students.length == 0) {
    //   getStudents();
    // }

    // if (newSelectedTab == 1 && feedbacks.length == 0) {
    //   getFeedbacks();
    // }
    setSelectedTab(newSelectedTab);
  };

  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({ title: "", body: "" });
  const [isTokenFound, setTokenFound] = useState(false);
  getToken(setTokenFound);

  onMessageListener()
    .then((payload) => {
      setShow(true);
      setNotification({
        title: payload.notification.title,
        body: payload.notification.body,
      });
      console.log(payload);
    })
    .catch((err) => console.log("failed: ", err));

  return (
    <div className={style.page}>
      {/* {isTokenFound && <h1> Notification permission enabled 👍🏻 </h1>}
      {!isTokenFound && <h1> Need notification permission ❗️ </h1>} */}
      {/* //----------------------------------------------------------------------------------// */}
      <Toast
        onClose={() => setShow(false)}
        show={show}
        delay={6000}
        autohide
        animation
        style={{
          position: "absolute",
          top: 40,
          right: 40,
          minWidth: 200,
        }}
      >
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className="mr-auto">{notification.title}</strong>
          <small>just now</small>
        </Toast.Header>
        <Toast.Body>{notification.body}</Toast.Body>
      </Toast>
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
          {classData.classTitle + " (Class code: " + classData.classCode + ")"}
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
