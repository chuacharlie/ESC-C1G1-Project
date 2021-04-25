import {useState} from "react";
import Popup from "reactjs-popup";

import { Grid, Button, List, Paper, Box, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "#f06292",
    borderRadius: 20,
    margin: "0 16px 0 0",
    color: "white",
    paddingLeft: "16px",
    paddingRight: "16px",
  },
  paper: {
    height: 300,
    width: 500,
    backgroundColor: "white",
    borderRadius: 20,
    border: "5px solid #f06292",
  },
  box: {
    width: "100%",
    height: "100%",
  },
  textField: {
    width: "80%",
    height: "16%",
  },
  popupButton: {
    borderRadius: 20,
    height: "36px",
    width: "100px",
    margin: "28px 16px 0 16px",
  },
}));

const ProfAddClass = ({onAdd}) => {
  const [classTitle, setClassTitle] = useState("");
  const style = useStyles();

  return (
    <Popup
      trigger={
        <Button id="addclass" className={style.button} startIcon={<AddIcon />}>
          Add Class
        </Button>
      }
      modal
    >
      {(close) => (
        <Paper className={style.paper}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            className={style.box}
          >
            <h3 style={{ textAlign: "center", color: "#f06292" }}>Add Class</h3>
            <TextField
              id="class-title"
              variant="outlined"
              placeholder="Class Title"
              className={style.textField}
              onChange = {(e) => setClassTitle(e.target.value)}
            />
            <Box display="flex" flexDirection="row">
              <Button
                id="add"
                className={style.popupButton}
                style={{ backgroundColor: "lightblue" }}
                onClick = {() => onAdd(classTitle)}
              >
                Add
              </Button>
              <Button
                id="cancel"
                className={style.popupButton}
                style={{ backgroundColor: "#f06292", color: "white" }}
                onClick={() => {
                  close();
                }}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </Paper>
      )}
    </Popup>
  );
};

export default ProfAddClass;
