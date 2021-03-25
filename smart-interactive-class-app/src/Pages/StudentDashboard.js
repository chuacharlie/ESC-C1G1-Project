import React from "react";
import { Link } from "react-router-dom";
import GridTile from "../Components/GridTile";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  grid: {
    height: 500,
    width: "100%",
    // backgroundColor: "lightblue",
    // elevation: 0,
    // borderRadius: 20,
    margin: "auto",
  },
  box: {
    width: "100%",
    height: "20%",
    margin: "auto",
  },
}));

function StudentDashboard() {
  const style = useStyles();

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Select a class to attend</h1>
      <Grid container justify="center" spacing={2} className={style.grid}>
        <GridTile component={Link} to="/" />
        <GridTile component={Link} to="/" />
        <GridTile component={Link} to="/" />
      </Grid>
    </div>
  );
}

export default StudentDashboard;
