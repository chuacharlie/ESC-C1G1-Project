import React from "react";
import { useState } from "react";

import {
  Paper,
  Button,
  TextField,
  List,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";

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
    width: "12%",
    margin: "16px 0px 0 0",
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
  textField: {
    width: "25%",
    height: "12%",
    margin: "8px 16px 0 0",
  },
}));

const Quizzes = ({ classData }) => {
  const [quiz, setQuiz] = useState({quizTitle: '', options: '', correctAns: ''});
  const style = useStyles();

  return (
    <div>
      <header>
        <TextField
          id="quiz-title"
          variant="outlined"
          placeholder="Quiz Title"
          className={style.textField}
          onChange={(e) => {setQuiz({quizTitle: (e.target.value)})}}
        />
        <Button className={style.button} startIcon={<AddIcon />}>
          New Quiz
        </Button>
      </header>
    </div>
  );
};

export default Quizzes;
