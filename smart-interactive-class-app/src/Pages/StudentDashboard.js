import ListTile from "../Components/ClassListTile2";
import StudentAddClass from "../Components/StudentAddClass";
import { useState } from "react";
import { Grid, Button, List } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  box: {
    width: "100%",
    height: "20%",
    margin: "auto",
  },
  page: {
    width: "80%",
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
}));

const StudentDashboard = ({onClickClass2}) => {
  const style = useStyles();
  const [classes, setClasses] = useState([
    { classTitle2: "Dummy Class 101", classCode: 1234 },
  ]);

  const onAdd = (classTitle2) => {
    const classCode = Math.floor(Math.random() * 10000) + 1;
    const newClass = { classCode, classTitle2 };
    setClasses([...classes, newClass]);
  };


  return (
    <div className={style.page}>
      <header className={style.header}>
        <StudentAddClass onAdd={onAdd} />
        <h1>Student Dashboard</h1>
      </header>

      <List>
        {classes.length > 0 ? (
          <>
            {classes.map((c) => (
              <ListTile classData2={c} onClick2={onClickClass2} />
            ))}
          </>
        ) : (
          "No class added"
        )}
      </List>
    </div>
  );
}

export default StudentDashboard;
