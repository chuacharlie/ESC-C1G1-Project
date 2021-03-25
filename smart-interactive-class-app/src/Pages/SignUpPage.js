import { Link } from "react-router-dom";
import { Box, Grid, Paper, Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { spacing } from "@material-ui/system";

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

const SignUpPage = ({ userType }) => {
  const style = useStyles();
  console.log(userType);
  return (
    <div className={style.root}>
      <h1 style={{ textAlign: "center" }}>
        Sign Up Here
      </h1>
      <Paper className={style.paper}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          className={style.box}
        >
          <Box width="100%" textAlign="center" py={4}>
            {(userType === "instructor" ? "Instructor Sign Up" : "Student Sign Up")}
          </Box>
          <TextField
            id="instructor-email"
            variant="outlined"
            placeholder="Email"
            className={style.textField}
          />
          <TextField
            id="instructor-password"
            variant="outlined"
            placeholder="Password"
            className={style.textField}
          />
          <Button
            className={style.button}
          >
            Sign up
          </Button>
        </Box>
      </Paper>
    </div>
  )
}

export default SignUpPage
