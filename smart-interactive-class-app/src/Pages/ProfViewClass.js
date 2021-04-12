import ListOfStudents from "./ListOfStudents";
import Feedback from "./Feedback";

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
      </Tabs>
      {selectedTab === 0 && <ListOfStudents classData={classData} />}
      {selectedTab === 1 && <Feedback classData={classData} />}
    </div>
  );
};

export default ProfViewClass;
