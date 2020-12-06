import React from 'react';
import classes from './BuildControl.module.css';

export const BuildControl = ({ label, added, removed, disabled }) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{label}</div>
      <button onClick={removed} className={classes.Less} disabled={disabled}>
        Меньше
      </button>
      <button onClick={added} className={classes.More}>
        Больше
      </button>
    </div>
  );
};
