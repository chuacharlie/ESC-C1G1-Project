import Iframe from "react-iframe";
import firebaseServerKey from "../config";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Box, Button, TextField, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
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

  divider: {
    margin: theme.spacing(2, 0),
  },
}));

const StudentViewClass = ({ classData2 }) => {
  const [iFrameSrc, setiFrameScr] = useState(
    "https://psg3-broadcast.officeapps.live.com/m/Broadcast.aspx?Fi=34ede3372ac476b2%5Fa46a708e%2D0bd6%2D4219%2D9649%2D8ca2e79fa5ce%2Dasync%2Epptx"
  );
  console.log(classData2);
  const style = useStyles();
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (e, newSelectedTab) => {
    setSelectedTab(newSelectedTab);
  };

  const url = "https://fcm.googleapis.com/fcm/send";

  const [qn, setQn] = useState("");

  const handleClick = () => {
    console.log("firebase key");
    console.log(firebaseServerKey);

    axios.post(
      url,
      {
        notification: {
          title: "Question from student",
          body: qn,
          click_action: "http://localhost:3000/",
        },
        to:
          "eNksOlm9yCQi29CAlx_jra:APA91bFfBjXTAkYALd_pkym9qMcVTLnIogJpOkEGWONK05-Vg53ZKtE8SkJV8_gxjYZNKwMsSzLSWIt45pcCpb0zK5GJN0CXN8DqroXD-REBcss9BIYYu5mkDA64pSbvsZUOEjnpUiCA",
      },
      {
        headers: {
          Authorization: `key=${firebaseServerKey}`,
        },
      }
    );
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
          {classData2["classTitle"] +
            " (Class code: " +
            classData2.classCode +
            ")"}
          {/* {"Dummy Class 101 (Class code: 1234) )"} */}
        </h1>
      </header>
      <TextField
        placeholder="Insert Powerpoint Link"
        onChange={(e) => setiFrameScr(e.target.value)}
      ></TextField>
      {iFrameSrc && (
        <div>
          <Iframe src={iFrameSrc} width="100%" height="650px" />
        </div>
      )}
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
          onChange={(e) => setQn(e.target.value)}
        />
        <Button
          id = 'submitqn'
          className={style.button}
          onClick={handleClick}
        >
          Submit question
        </Button>

        <Button
          id = 'topostlect'
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
