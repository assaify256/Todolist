import React from "react";
import styles from "./details-task.module.css";

const DetailsTask = ({info}) => {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>TASK DETAILS</h1>
      <div className={styles.inputContainer}>
        <p className={styles.text}>{info.title}</p>
        <p className={styles.text}>{info.description}</p>
        <input type="date" value={info.dueDate} disabled/>
      </div>
    </div>
  );
};

export default DetailsTask;
