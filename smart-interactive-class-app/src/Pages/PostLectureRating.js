import { Link } from "react-router-dom";
import { Box, Grid, Paper, Button, TextField,Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { spacing } from "@material-ui/system";
import { Rating } from '@material-ui/lab';
import React from "react";


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

const PostLectureRating = () => {
  const style = useStyles()
  const [value, setValue] = React.useState(2);;

  return (
    <div className={style.root}>
      <Box width="100%" height={80} textAlign="center" pt={5}>
        <h1>POST LECTURE RATING</h1>
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
              <h1>CHOOSE FROM 1 TO 5 STARS</h1>
              </Box>


              <Box component="fieldset" mb={3} borderColor="transparent">
              <Typography component="legend">How was the lecture?</Typography>
                <Rating
                name="simple-controlled"
                value={value}
                defaultValue={2}
                size="large"
                onChange={(event, newValue) => {
                setValue(newValue);
          }}
        />
        </Box>



    
              
              <Button
                id = "endbutton"
                className={style.button}
                to={"/"}
                component={Link}
              >
                Submit Post Lecture Rating (Go back to home)
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


export default PostLectureRating ;

//switch to master than commit to master
