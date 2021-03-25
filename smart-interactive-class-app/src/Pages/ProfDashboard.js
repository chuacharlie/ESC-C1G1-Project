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

function ProfDashboard() {
  const style = useStyles();

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        Select a class to begin presentation
      </h1>
      <Grid container justify="center" spacing={2} className={style.grid}>
        <GridTile component={Link} to="/ProfPresentationURL" />
        <GridTile component={Link} to="/ProfPresentationURL" />
        <GridTile component={Link} to="/ProfPresentationURL" />
      </Grid>
    </div>
  );
}

export default ProfDashboard;
