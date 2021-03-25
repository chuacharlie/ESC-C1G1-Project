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
    marginTop:8,
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

const LoginPage = ({onClickSignUp}) => {
  const style = useStyles();

  return (
    <div className={style.root}>
      <Box width="100%" height={80} textAlign="center" pt={5}>
        <h2 style={{ textAlign: "center" }}>
          Welcome to Smart Class
        </h2>
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
              <h3 style={{ textAlign: "center" }}>
                Instructor Login
              </h3>
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
                to={"/ProfDashboard"}
                component={Link}
              >
                Login as Instructor
              </Button>
              <Button
                className={style.button}
                to={"/SignUpPage"}
                component={Link}
                // onClick = {() => onClickSignUp("instructor")}
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
              <h3 style={{ textAlign: "center" }}>
                Student Login
              </h3>
              <TextField
                id="student-email"
                variant="outlined"
                placeholder="Email"
                className={style.textField}
              />
              <TextField
                id="student-password"
                variant="outlined"
                placeholder="Password"
                className={style.textField}
              />
              <Button
                className={style.button}
                to={"/StudentDashboard"}
                component={Link}
              >
                Login as Student
              </Button>
              <Button
                className={style.button}
                to={"/SignUpPage"}
                component={Link}
                // onClick = {() => onClickSignUp("student")}
              >
                Sign Up as Student
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      {/* <Link to="/ProfDashboard"> To ProfDashboard </Link> */}
      {/* <Link to="/StudentDashboard"> To StudentDashboard</Link> */}
    </div>
  );
};

export default LoginPage;

//switch to master than commit to master
