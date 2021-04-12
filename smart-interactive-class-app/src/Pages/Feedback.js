import React from "react";
import { useState } from "react";

import {
  Paper,
  Button,
  List,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "lightblue",
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const useStyles = makeStyles((theme) => ({
  page: {
    // width: "80%",
    alignItems: "center",
    margin: "auto",
  },
  button: {
    backgroundColor: "#f06292",
    borderRadius: 20,
    width: "16%",
    height: "36px",
    margin: "0 16px 0 0",
    color: "white",
  },
  header: {
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
  },
  table: {
    minWidth: 600,
  },
}));

function createData(feedback, name, dateTime) {
  return { feedback, name, dateTime };
}

const rows = [
  createData("Great lecture", "Lee Xiao Ming", "09/04/2021, 12.51 PM"),
  createData("How can we expand on cohort exercise 2", "Tan Da Ming", "09/04/2021, 12.52PM"),
];

const Feedback = ({ classData }) => {
  const style = useStyles();
  const [feedbacks, setFeedbacks] = useState([]);

  const getFeedbacks = () => {

  }

  return (
    <Table stickyHeader className={style.table}>
      <TableHead>
        <TableRow>
          <StyledTableCell align="left">Feedback/Questions</StyledTableCell>
          <StyledTableCell align="left">From</StyledTableCell>
          <StyledTableCell align="right">Posted on</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.name}>
            <TableCell component="th" scope="row">
              {row.feedback}
            </TableCell>
            <TableCell align="left">{row.name}</TableCell>
            <TableCell align="right">{row.dateTime}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Feedback;
