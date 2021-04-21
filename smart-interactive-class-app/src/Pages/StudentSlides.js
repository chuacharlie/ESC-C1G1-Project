import { Link } from "react-router-dom";
import { Box, Grid, Paper, Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { spacing } from "@material-ui/system";
import Divider from '@material-ui/core/Divider';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },  
  paper: {
    height: 350,
    width: 650,
    backgroundColor: "lightblue",
    elevation: 0,


  
  },
  button: {
    background: "#01579b",
    border: 0,
    borderRadius: 5,
    boxShadow: "none",
    color: "white",
    height: "10%",
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

  formControl :{
    

  } ,
  
  divider: {
    margin: theme.spacing(2, 0),}
}));

const StudentSlides = () => {
  const style = useStyles();

  return (
    <div className={style.root}>
      <Box width="100%" height={150} textAlign="center" pt={5}>
        <h1>Student's actions below</h1>
      </Box>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="flex-end"
        spacing={10}
      >
        <Grid>
          <Box               
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              className={style.box}
              >

          <Paper className={style.paper}>

          <Box width="100%" backgroundColor  textAlign="center" py={4}>
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
              </Box>
            </Paper>
          </Box>
        </Grid>

      </Grid>
      {/* <Link to="/ProfDashboard"> To ProfDashboard </Link> */}
      {/* <Link to="/StudentDashboard"> To StudentDashboard</Link> */}
      
      </div>
  );
};

export default StudentSlides;
