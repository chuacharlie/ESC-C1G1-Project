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
    backgroundColor: "lightblue",
  },
}));

const StudentViewClass = ({ classData }) => {
  const style = useStyles();
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (e, newSelectedTab) => {
    setSelectedTab(newSelectedTab);
  };

  return (
    <div className={style.page}>
      <header className={style.header}>
        <IconButton
          className={style.button}
          to={"/StudentDashboard"}
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
      {selectedTab === 0 && <ListOfStudents />}
      {selectedTab === 1 && <Feedback />}
    </div>
  );
};

export default StudentViewClass;
