import React from 'react'
import { Box, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    height: 400,
    width: 500,
  }
}));

function GridTile() {
  const style = useStyles();
  return (
    <Paper className={style.paper} backgroundColor='lightblue' elevation={0}>
    </Paper>
  )
}

export default GridTile
