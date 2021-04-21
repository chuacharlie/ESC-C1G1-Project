
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
import Divider from '@material-ui/core/Divider';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


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

  divider: {
    margin: theme.spacing(2, 0),}
}));

const StudentViewClass = ({ classData2 }) => {
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
          {//classData2.classTitle + "test" + " (Class code: " + classData2.classCode + ")"}
}
          {"Dummy Class 101 (Class code: 1234) )"}
        </h1>
      </header>
      <Box width="100%" height={150} textAlign="center" pt={5}>
        <h1>Student's actions below</h1>
      </Box>
      <Box width="100%" textAlign="center" py={4}>
                <h1>Type Your Question</h1>
                <TextField
                id="student-ask-question"
                variant="outlined"
                placeholder="Enter your question here"
                className={style.textField}
              />
              <Button
                className={style.button}
                to={"/PostLectureURL"}
                component={Link}
              >
                Submit question
              </Button>

              <Button
                className={style.button}
                to={"/PostLectureURL"}
                component={Link}
              >
                Go to Post Lecture Review
              </Button>
              </Box>
    

    </div>
    
  );
};

export default StudentViewClass;
