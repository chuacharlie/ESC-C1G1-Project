import { Link } from "react-router-dom";
import { Box, Grid, Paper, Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { spacing } from "@material-ui/system";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "../FirebaseAPI";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 400,
    width: 500,
    backgroundColor: "lightblue",
    elevation: 0,
    borderRadius: 20,
  },
  button: {
    background: "#01579b",
    border: 0,
    borderRadius: 5,
    boxShadow: "none",
    color: "white",
    height: "12%",
    width: "80%",
    padding: "0 30px",
    marginTop: 8,
  },
  box: {
    width: "100%",
    height: "100%",
  },
  textField: {
    width: "80%",
    height: "16%",
  },
}));

//edit login page name
const LoginCheckPage = (props) => {
  const history = useHistory;
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  return (
    <div>
      <input
        value={credentials.email}
        type="text"
        placeholder="Please enter your e-mail address"
        onChange={(event) =>
          setCredentials({
            email: event.target.value,
            password: credentials.password,
          })
        }
      />
      <input
        value={credentials.password}
        type="password"
        placeholder="Enter your password"
        onChange={(event) =>
          setCredentials({
            email: credentials.email,
            password: event.target.value,
          })
        }
      />
      <button
        disabled={
          !/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/.test(
            credentials.email
          )
        }
        onClick={() => {
          if (credentials.password === "let-me-in") history.push("/secret");
        }}
      >
        Login
      </button>
    </div>
  );
};

const LoginPage = ({
  onClickSignUp,
  instructorEmail,
  setInstructorEmail,
  studentEmail,
  setStudentEmail,
}) => {
  const style = useStyles();
  // const [instructorEmail, setInstructorEmail] = useState("");
  const [instructorPassword, setInstructorPassword] = useState("");
  // const [studentEmail, setStudentEmail] = useState("");
  const [studentPassword, setStudentPassword] = useState("");
  const history = useHistory();

  const onInstructorLogin = async (e) => {
    e.preventDefault();
    if (instructorEmail === "" || instructorPassword === "") {
      if (instructorEmail === "") {
        alert("email should not be empty");
      } else if (instructorPassword === "") {
        alert("password should not be empty");
      }
    } else {
      if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(instructorEmail)) {
        const auth = firebase.auth();
        const firestore = firebase.firestore();
        auth
          .signInWithEmailAndPassword(instructorEmail, instructorPassword)
          .then(() => {
            let user = auth.currentUser;
            if (user) {
              firestore
                .collection("profs")
                .doc(user.uid)
                .get()
                .then((doc) => {
                  const data = doc.data();
                  if (data !== undefined) {
                    history.push("/ProfDashboard");
                  } else {
                    alert("Invalid User");
                  }
                });
            }
          })
          .catch((error) => {
            const errorString = JSON.stringify(error);
            const parseerror = JSON.parse(errorString);
            alert(parseerror.message); // alert error message
            console.log(error);
          });
      } else {
        alert("please enter valid email address");
      }
    }
  };

  const onStudentLogin = async (e) => {
    e.preventDefault();
    if (studentEmail === "" || studentPassword === "") {
      if (studentEmail === "") {
        alert("email should not be empty");
      } else if (studentPassword === "") {
        alert("password should not be empty");
      }
    } else {
      if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(studentEmail)) {
        const auth = firebase.auth();
        const firestore = firebase.firestore();
        auth
          .signInWithEmailAndPassword(studentEmail, studentPassword)
          .then(() => {
            let user = auth.currentUser;
            if (user) {
              firestore
                .collection("student")
                .doc(user.uid)
                .get()
                .then((doc) => {
                  const data = doc.data();
                  if (data !== undefined) {
                    history.push("/StudentDashboard");
                  } else {
                    alert("Invalid User");
                  }
                });
            }
          })
          .catch((error) => {
            const errorString = JSON.stringify(error);
            const parseerror = JSON.parse(errorString);
            alert(parseerror.message); // alert error message
            console.log(error);
          });
      } else {
        alert("please enter valid email address");
      }
    }
  };

  return (
    <div className={style.root}>
      <Box width="100%" height={80} textAlign="center" pt={5}>
        <h2 style={{ textAlign: "center" }}>Welcome to Smart Class</h2>
      </Box>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={10}
      >
        <Grid key={0} item>
          <Paper className={style.paper}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              className={style.box}
            >
              <h3 style={{ textAlign: "center" }}>Instructor Login</h3>
              <TextField
                id="instructor-email"
                variant="outlined"
                type="email"
                placeholder="Email"
                className={style.textField}
                onChange={(e) => setInstructorEmail(e.target.value)}
              />
              <TextField
                id="instructor-password"
                variant="outlined"
                type="password"
                placeholder="Password"
                className={style.textField}
                onChange={(e) => setInstructorPassword(e.target.value)}
              />
              <Button
                id="instructor-login-button"
                className={style.button}
                to={"/ProfDashboard"}
                component={Link}
                onClick={onInstructorLogin}
              >
                Login as Instructor
              </Button>
              <Button
                id="instructor-signup-button"
                className={style.button}
                to={"/SignUpPage"}
                component={Link}
                onClick={() => onClickSignUp("instructor")}
              >
                Sign Up as Instructor
              </Button>
            </Box>
          </Paper>
        </Grid>

        <Grid key={1} item>
          <Paper className={style.paper}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              className={style.box}
            >
              <h3 style={{ textAlign: "center" }}>Student Login</h3>
              <TextField
                id="student-email"
                variant="outlined"
                type="email"
                placeholder="Email"
                className={style.textField}
                onChange={(e) => setStudentEmail(e.target.value)}
              />
              <TextField
                id="student-password"
                variant="outlined"
                type="password"
                placeholder="Password"
                className={style.textField}
                onChange={(e) => setStudentPassword(e.target.value)}
              />
              <Button
                id="student-login-button"
                className={style.button}
                to={"/StudentDashboard"}
                component={Link}
                onClick={onStudentLogin}
              >
                Login as Student
              </Button>
              <Button
                id="student-signup-button"
                className={style.button}
                to={"/SignUpPage"}
                component={Link}
                onClick={() => onClickSignUp("student")}
              >
                Sign Up as Student
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginPage;

//switch to master than commit to master
