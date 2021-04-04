import ListTile from "../Components/ListTile";
import ProfAddClass from "../Components/ProfAddClass";
import ProfViewClass from "../Pages/ProfViewClass";

import { useState } from "react";
import {
  Switch,
  Link,
  BrowserRouter as Router,
  Route,
  useRouteMatch,
} from "react-router-dom";
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

function ProfDashboard() {
  let match = useRouteMatch();

  const style = useStyles();
  const [classes, setClasses] = useState([
    { classTitle: "Dummy Class 101", classCode: 1234 },
  ]);
  const [classData, setClassData] = useState({});

  const onAdd = (classTitle) => {
    const classCode = Math.floor(Math.random() * 10000) + 1;
    const newClass = { classCode, classTitle };
    setClasses([...classes, newClass]);
  };

  const onClick = (classData) => {
    setClassData(classData);
  };

  return (
    <div className={style.page}>
      <header className={style.header}>
        <ProfAddClass onAdd={onAdd} />
        <h1>Instructor Dashboard</h1>
      </header>

      <List>
        {classes.length > 0 ? (
          <>
            {classes.map((c) => (
              <ListTile classData={c} onClick={onClick} />
            ))}
          </>
        ) : (
          "No class added"
        )}
      </List>
    </div>
  );
}

export default ProfDashboard;
