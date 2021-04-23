import React from "react";

import { useState, useEffect } from "react";

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
import firebase from "../FirebaseAPI";
import { useLocation } from "react-router-dom";

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

function createData(ID, name, score, quizCount, qnCount) {
  return { ID, name, score, quizCount, qnCount };
}

const rows = [
  //createData(1003456, "Lee Xiao Ming", 60, 10, 3),
  //createData(1001234, "Tan Da Ming", 80, 10, 6),
];

const ListOfStudents = ({ classData }) => {
  const style = useStyles();
  const [students, setStudents] = useState([...rows]);
  const [classId, setclassId] = useState("");
  const location = useLocation();


  const getStudents = () => { }

  console.log(rows);
  console.log(students);
  console.log(classData);

  const getStudentList = async () => {

  }
  useEffect(() => {
    let pathname = location.pathname.split(':');
    let ClassId = ''
    ClassId = pathname[pathname.length - 1];
    console.log(ClassId)
    setclassId(ClassId)
  }, [])

  useEffect(() => {
    const firestore = firebase.firestore();
    const postData = [];
    let isSubscribed = true;

    rows = [];

    if (classId !== '') {
      try {
        firestore
          .collection('classes')
          .doc(classId)
          .get()
          .then(docs => {
            const data = docs.data();
            console.log(data)
            // if(data === undefined) {
              try {
                data.studentsInClass.forEach(element => {
                  console.log(element)
                  if(element !== null && element !== '') {
                    firestore
                    .collection('student')
                    .doc(element)
                    .get()
                    .then(docs => {
                      const data = docs.data();
                      rows.push(createData(data.studentId, data.name, 60, 10, 3));
                    })
                    .catch(error => {
                      console.log(error)
                    });
                  }
                })
              } catch (error) {
                
              }
              
            // }
            
          });
      } catch (error) {

      }
    }


    let timerFunc = setTimeout(() => {
      setStudents(rows);
    }, 800);

    return () => clearTimeout(timerFunc);
  }, [classId])
  

  return (
    <Table stickyHeader className={style.table}>
      <TableHead>
        <TableRow>
          <StyledTableCell align="left">ID</StyledTableCell>
          <StyledTableCell align="left">Name</StyledTableCell>
          <StyledTableCell align="right">Total Score</StyledTableCell>
          <StyledTableCell align="right">Quiz Count</StyledTableCell>
          <StyledTableCell align="right">Qn Count</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.ID}>
            <TableCell component="th" scope="row">
              {row.ID}
            </TableCell>
            <TableCell align="left">{row.name}</TableCell>
            <TableCell align="right">{row.score}</TableCell>
            <TableCell align="right">{row.quizCount}</TableCell>
            <TableCell align="right">{row.qnCount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ListOfStudents;
