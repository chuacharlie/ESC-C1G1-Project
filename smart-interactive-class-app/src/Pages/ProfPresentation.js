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

const ProfPresentation = () => {
  const style = useStyles();

  return (
    <div className={style.root}>
      <Box width="100%" height={80} textAlign="center" pt={5}>
        Prof's actions below
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
              <Box width="100%" textAlign="center" py={4}>
                Start Presentation
              </Box>
              <TextField
                id="instructor-email"
                variant="outlined"
                placeholder="NULL"
                className={style.textField}
              />
              <TextField
                id="instructor-password"
                variant="outlined"
                placeholder="NULL"
                className={style.textField}
              />
              <Button
                className={style.button}
                to={"/"}
                component={Link}
              >
                StartPresentation ( Go back to Home)
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
              <Box width="100%" textAlign="center" py={4}>
                StartPresentation
              </Box>
              <TextField
                id="student-email"
                variant="outlined"
                placeholder="NULL"
                className={style.textField}
              />
              <TextField
                id="student-password"
                variant="outlined"
                placeholder="NULL"
                className={style.textField}
              />
              <Button
                className={style.button}
                to={"/"}
                component={Link}
              >
               StartPresentation ( Go back to Home)
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

export default ProfPresentation;

//switch to master than commit to master
