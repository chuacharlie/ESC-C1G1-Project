import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Grid, Paper, Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { spacing } from "@material-ui/system";

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
  const style = useStyles();
  // console.log(userType);



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
            variant="outlined"
            placeholder="Email"
            className={style.textField}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="password"
            variant="outlined"
            placeholder="Password"
            className={style.textField}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            id="password"
            variant="outlined"
            placeholder="Confirm Password"
            className={style.textField}
          />
          <Button
            className={style.button}
            to={
              userType === "instructor" ? "/ProfDashboard" : "/StudentDashboard"
            }
            component={Link}
          >
            Sign up
          </Button>
        </Box>
      </Grid>
    </div>
  );
};

export default SignUpPage;
