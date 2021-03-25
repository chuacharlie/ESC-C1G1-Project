import React from "react";
import { Button, Box, Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  gridItem: {
    height: "40%",
    width: "20%",
    margin: "auto",
  },
  button: {
    backgroundColor: "lightblue",
    borderRadius: 20,
    width: "100%",
    height: "100%",
  },
}));

const GridTile = ({ component, to }) => {
  const style = useStyles();
  return (
    <Grid item className={style.gridItem}>
      <Button component={component} to={to} className={style.button}></Button>
    </Grid>
  );
};

// GridTile.propsType = {

// }

export default GridTile;
