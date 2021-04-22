import ListTile from "../Components/ClassListTile";
import ProfAddClass from "../Components/ProfAddClass";

import { useState } from "react";
import { Link } from "react-router-dom";

import { Grid, Button, List, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import {writeProfData} from "../FirebaseAPI"

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
    backgroundColor: "white",
    borderRadius: 20,
    margin: "0 16px 0 30px",
    color: "#f06292",
  },
  header: {
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
  },
}));

const ProfDashboard = ({ onClickClass }) => {
  const style = useStyles();
  const [classes, setClasses] = useState([
    { classTitle: "Dummy Class 101", classCode: 1234 },
  ]);

  const onAdd = async (classTitle) => {
    
    console.log("writing to firebase prof");
    const response = await writeProfData();
    console.log(response);

    const classCode = Math.floor(Math.random() * 10000) + 1;
    const newClass = { classCode, classTitle };
    setClasses([newClass, ...classes]);
  };

  return (
    <div className={style.page}>
      <header className={style.header}>
        <ProfAddClass onAdd={onAdd} />
        <h1>Instructor Dashboard</h1>
        <Button
          className={style.button}
          endIcon={<ExitToAppIcon />}
          to={"/"}
          component={Link}
        >
          Log Out
        </Button>
      </header>

      <List>
        {classes.length > 0 ? (
          <>
            {classes.map((c) => (
              <ListTile classData={c} onClick={onClickClass} />
            ))}
          </>
        ) : (
          "No class added"
        )}
      </List>
    </div>
  );
};

export default ProfDashboard;
