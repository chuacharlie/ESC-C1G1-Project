import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
  Tooltip,
} from "@devexpress/dx-react-chart-material-ui";
import { EventTracker } from "@devexpress/dx-react-chart";

import {
  Box,
  Collapse,
  IconButton,
  Typography,
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
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

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
    margin: "16px 0 16px 0",
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
  const [rows, setRows] = useState([
    createData("Cohort Ex 1", "Open Ended", {}, "09/04/2021, 12.51 PM"),
  ]);
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
    var dateTime = new Date().toLocaleString();
    if (
      qn !== "" &&
      qnType === "mcq" &&
      numOfOptions !== "" &&
      correctAns !== ""
    ) {
      const newQuiz = createData(
        qn,
        "MCQ",
        { numOfOptions, correctAns },
        dateTime
      );
      setRows([newQuiz, ...rows]);
      handleClose();
    } else if (qn !== "" && qnType === "open") {
      const newQuiz = createData(qn, "Open Ended", {}, dateTime);
      setRows([newQuiz, ...rows]);
      handleClose();
    } else {
      alert("Please finish setting the quiz!");
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
      <Table stickyHeader className={style.table}>
        <TableHead>
          <TableRow>
            <StyledTableCell />
            <StyledTableCell align="left">Question</StyledTableCell>
            <StyledTableCell align="right">Type</StyledTableCell>
            <StyledTableCell align="right">Posted on</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row row={row} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Quizzes;

function createData(quizQn, quizType, quizDetails, dateTime) {
  return {
    quizQn,
    quizType,
    quizDetails,
    dateTime,
    responses: [
      { answer: "white box test", student: "Lee Xiao Ming" },
      { answer: "black box test", student: "Tan Da Ming" },
    ],
  };
}

Row.propTypes = {
  row: PropTypes.shape({
    quizQn: PropTypes.string,
    quizType: PropTypes.string,
    quizDetails: PropTypes.shape({}),
    dateTime: PropTypes.string,
    responses: PropTypes.arrayOf(
      PropTypes.shape({ answer: PropTypes.string, student: PropTypes.string })
    ),
  }),
};

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  console.log(row);
  return (
    <React.Fragment>
      <TableRow>
        <TableCell>
          <IconButton size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="left">{row.quizQn}</TableCell>
        <TableCell align="right">{row.quizType}</TableCell>
        <TableCell align="right">{row.dateTime}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Responses:
              </Typography>
              {row.quizType === "MCQ" && (
                <>
                  <div>{"Correct Answer: " + row.quizDetails.correctAns}</div>
                  <MCQResponsesChart />
                </>
              )}
              {row.quizType === "Open Ended" && (
                <Table
                  stickyHeader
                  size="small"
                  style={{ margin: "16px 0 0 0" }}
                >
                  <TableHead>
                    <TableRow>
                      <TableCell>Answers</TableCell>
                      <TableCell>Student</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.responses.map((responseRow) => (
                      <TableRow key={responseRow.student}>
                        <TableCell>{responseRow.answer}</TableCell>
                        <TableCell>{responseRow.student}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

function MCQResponsesChart() {
  const [data, setData] = useState([
    { option: "A", value: 4.44 },
    { option: "B", value: 5.31 },
    { option: "C", value: 6.127 },
    { option: "D", value: 6.0 },
  ]);

  return (
    <div style={{ width: "50%" }}>
      <Chart data={data}>
        <ArgumentAxis />
        <BarSeries valueField="value" argumentField="option" barWidth={0.8} />
        <EventTracker />
        <Tooltip />
      </Chart>
    </div>
  );
}

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
