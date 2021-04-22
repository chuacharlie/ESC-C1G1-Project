import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Grid, Paper, Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { spacing } from "@material-ui/system";
import firebase from "../FirebaseAPI";
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    height: 500,
    width: "100%",
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
  },
  box: {
    height: 500,
    width: 500,
    backgroundColor: "lightblue",
    elevation: 0,
    borderRadius: 20,
  },
  textField: {
    width: "80%",
    height: "16%",
  },
}));

const SignUpPage = ({ userType }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [studId, setStudId] = useState("");
  const style = useStyles();
  const history = useHistory();
  // console.log(userType);

  const onClick = async (e) => {
    e.preventDefault();
    if(email === '' || password === '') {
      if(email === '') {
        alert('email should not be empty')
      } else if(password === '') {
        alert('password should not be empty')
      }
    } else {
      if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      const auth = firebase.auth();
      const firestore = firebase.firestore();
      await auth
        .createUserWithEmailAndPassword(email, password)
        .then(async () => {
          let user = auth.currentUser;
          let data = {};
          if (userType === "instructor") {
            data = {
              email: email,
              name: name
            }
          } else {
            data = {
              email: email,
              name: name,
              studentId: studId
            }
          }
          console.clear();
          console.log(JSON.stringify(user))
          if (user) {
            firestore
              .collection(userType === "instructor" ? "profs" : "student")
              .doc(user.uid)
              .set(data)
              .then((ref) => {
                console.log(ref)
                history.push(userType === "instructor" ? "/ProfDashboard" : "/StudentDashboard")
              })
              .catch((error) => {
                const errorString = JSON.stringify(error);
                const parseerror = JSON.parse(errorString);
                alert(parseerror.message) // alert error message 
              });
          }
        })
      } else {
        alert('please enter valid email address')
      }
    }
  }


  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Join us</h2>
      <Grid container justify="center" className={style.grid}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          className={style.box}
        >
          <Box width="100%" textAlign="center" py={4}>
            {userType === "instructor"
              ? "Instructor Sign Up"
              : "Student Sign Up"}
          </Box>
          <TextField
            id="Name"
            variant="outlined"
            placeholder="Name"
            className={style.textField}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="email"
            type="email"
            variant="outlined"
            placeholder="Email"
            className={style.textField}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="password"
            type="password"
            variant="outlined"
            placeholder="Password"
            className={style.textField}
            onChange={(e) => setPassword(e.target.value)}
          />
          {userType !== "instructor"
            &&
            <TextField
              id="studentId"
              variant="outlined"
              placeholder="Student Id"
              className={style.textField}
              onChange={(e) => setStudId(e.target.value)}
            />
          }
          <Button
            className={style.button}
            to={
              userType === "instructor" ? "/ProfDashboard" : "/StudentDashboard"
            }
            component={Link}
            onClick={onClick}
          >
            Sign up
          </Button>
        </Box>
      </Grid>
    </div>
  );
};

export default SignUpPage;
