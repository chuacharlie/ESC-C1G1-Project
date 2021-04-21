import React from "react";
import { Link } from "react-router-dom";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  ListItem: {
    width: "100%",
    backgroundColor: "lightblue",
    borderRadius: 8,
    margin: "8px 0 8px 0",
  },
}));

const ListTile = ({ classData2, onClick2 }) => {
  const style = useStyles();

  return (
    <ListItem
      button
      className={style.ListItem}
      to={`/StudentViewClass:${classData2.classCode}`}
      component={Link}
      onClick2={onClick2(classData2)}
    >
      <ListItemText
        primary={classData2.classTitle2}
        secondary={"Class Code: " + classData2.classCode}
      />
    </ListItem>
  );
};

export default ListTile;
