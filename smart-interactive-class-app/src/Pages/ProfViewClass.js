import { Link } from "react-router-dom";
import { Box, Grid, Paper, Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { spacing } from "@material-ui/system";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
  },
  page: {
    width: "80%",
    alignItems: "center",
    margin: "auto",
  },
}));

const ProfViewClass = ({ classData }) => {
  const style = useStyles();

  return (
    <div>
      <header className={style.header}>Hello</header>
    </div>
  );
};

export default ProfViewClass;

//switch to master than commit to master
