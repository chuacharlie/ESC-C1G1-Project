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

const ListTile = ({ classData, onClick }) => {
  const style = useStyles();

  return (
    <ListItem
      button
      className={style.ListItem}
      to={`/ProfViewClass:${classData.classCode}`}
      component={Link}
      onClick={onClick(classData)}
    >
      <ListItemText
        primary={classData.classTitle}
        secondary={"Class Code: " + classData.classCode}
      />
    </ListItem>
  );
};

export default ListTile;
