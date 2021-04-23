import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  large: {
    width: theme.spacing(11),
    height: theme.spacing(11),
  },
}));

export default function Avatarimage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar src="/broken-image.jpg" className={classes.large} />
      <h3 className="mt-4">User Name</h3>
    </div>
  );
}
