import React from "react";
import classes from "./BuildControl.css";

const BuildControl = ({ label }) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{label}</div>
      <button className={classes.Less}>Меньше</button>
      <button className={classes.More}>Больше</button>
    </div>
  );
};

export default BuildControl;
