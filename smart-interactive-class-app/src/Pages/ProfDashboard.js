import ListTile from "../Components/ClassListTile";
import ProfAddClass from "../Components/ProfAddClass";

import { useState } from "react";
import { Link } from "react-router-dom";

import { Grid, Button, List, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { getToken, onMessageListener } from "../FirebaseAPI";
import Toast from "react-bootstrap/Toast";

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

const ProfDashboard = ({ onClickClass, profEmail }) => {
  const style = useStyles();
  const [classes, setClasses] = useState([
    { classTitle: "Dummy Class 101", classCode: 1234 },
  ]);

  const onAdd = async (classTitle) => {
    const classCode = Math.floor(Math.random() * 10000) + 1;
    const newClass = { classCode, classTitle };
    setClasses([newClass, ...classes]);
  };

  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({ title: "", body: "" });
  const [isTokenFound, setTokenFound] = useState(false);
  getToken(setTokenFound);

  onMessageListener()
    .then((payload) => {
      setShow(true);
      setNotification({
        title: payload.notification.title,
        body: payload.notification.body,
      });
      console.log(payload);
    })
    .catch((err) => console.log("failed: ", err));

  return (
    <div className={style.page}>
      {/* // remember to comment out, just a check to see if local device token is returned  */}
      {/* {isTokenFound && <h1> Notification permission enabled 👍🏻 </h1>}
      {!isTokenFound && <h1> Need notification permission ❗️ </h1>} */}
      {/* //----------------------------------------------------------------------------------// */}
      <Toast
        onClose={() => setShow(false)}
        show={show}
        delay={6000}
        autohide
        animation
        style={{
          position: "absolute",
          top: 40,
          right: 40,
          minWidth: 200,
        }}
      >
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className="mr-auto">{notification.title}</strong>
          <small>just now</small>
        </Toast.Header>
        <Toast.Body>{notification.body}</Toast.Body>
      </Toast>
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
