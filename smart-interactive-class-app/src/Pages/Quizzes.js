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
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  Select,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";
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
    padding: "auto",
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
    width: "80%",
    height: "16%",
    margin: "0 0 0 0",
  },
  formControl: {
    margin: "8px 16px 0 0",
    minWidth: 160,
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
}));

const Quizzes = ({ classData }) => {
  const [quizzes, setQuizzes] = useState([]);
  const [qn, setQn] = useState("");
  const [qnType, setQnType] = useState("mcq");
  const [numOfOptions, setNumOfOpt] = useState("");
  const [correctAns, setCorrectAns] = useState("");
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSendNewQuiz = () => {
    if (
      qn !== "" &&
      numOfOptions !== "" &&
      correctAns !== "" &&
      qnType === "mcq"
    ) {
      const newQuizDetails = { qn, qnType, numOfOptions, correctAns };
      setQuizzes([...quizzes, newQuizDetails]);
      handleClose();
    } else if (
      qn !== "" &&
      numOfOptions !== "" &&
      correctAns !== "" &&
      qnType === "open"
    ) {
      const newQuizDetails = { qn, qnType };
      setQuizzes([...quizzes, newQuizDetails]);
      handleClose();
    } else {
      alert("Please finish setting the quiz's question!");
    }
  };

  const style = useStyles();

  return (
    <div>
      <Button
        className={style.button}
        startIcon={<AddIcon />}
        onClick={handleClickOpen}
      >
        New Quiz
      </Button>
      {NewQuizDialog(
        open,
        handleClose,
        style,
        setQn,
        qnType,
        setQnType,
        numOfOptions,
        setNumOfOpt,
        correctAns,
        setCorrectAns,
        onSendNewQuiz
      )}
    </div>
  );
};

export default Quizzes;

function NewQuizDialog(
  open,
  handleClose,
  style,
  setQn,
  qnType,
  setQnType,
  numOfOptions,
  setNumOfOpt,
  correctAns,
  setCorrectAns,
  onSendNewQuiz
) {
  const letterArray = [];
  const createLetterOptions = () => {
    if (numOfOptions != "") {
      for (let i = 1; i < numOfOptions + 1; i++) {
        letterArray.push(String.fromCharCode(i + 64));
      }
    }
  };

  const handleNumOptChange = (e) => {
    setNumOfOpt(e.target.value);
    createLetterOptions();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>New Quiz</DialogTitle>
      <DialogContent>
        <form className={style.container}>
          <TextField
            id="quiz-title"
            variant="outlined"
            placeholder="Quiz Question"
            className={style.textField}
            onChange={(e) => {
              setQn(e.target.value);
            }}
          />
          <FormControl component="fieldset">
            <RadioGroup
              row
              name="qnType"
              value={qnType}
              onChange={(e) => {
                setQnType(e.target.value);
              }}
            >
              <FormControlLabel value="mcq" control={<Radio />} label="MCQ" />
              <FormControlLabel
                value="open"
                control={<Radio />}
                label="Open Ended"
              />
            </RadioGroup>
          </FormControl>
          {qnType === "mcq" ? (
            <div>
              <FormControl variant="outlined" className={style.formControl}>
                <InputLabel id="num-of-options">No. Of Options</InputLabel>
                <Select
                  labelId="num-of-options-label"
                  id="num-of-options"
                  value={numOfOptions}
                  onChange={handleNumOptChange}
                  label="No. Of Options"
                >
                  {createLetterOptions()}
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="outlined" className={style.formControl}>
                <InputLabel id="correct-ans">Correct Answer</InputLabel>
                <Select
                  labelId="correct-ans-label"
                  id="correct-ans"
                  value={correctAns}
                  onChange={(e) => setCorrectAns(e.target.value)}
                  label="Correct Answer"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {letterArray.map((letter) => (
                    <MenuItem value={letter}>{letter}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          ) : (
            <div></div>
          )}
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button
          onClick={onSendNewQuiz}
          style={{
            backgroundColor: "#f06292",
            color: "white",
          }}
        >
          Send
        </Button>
      </DialogActions>
    </Dialog>
  );
}
