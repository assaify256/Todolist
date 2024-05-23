import React, { useState } from "react";
import styles from "./list-bullet.module.css";
import { useDispatch } from "react-redux";
import { get, put, edit } from "../../store/reducer";

const ListBullet = ({ info }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(info.isDone);
  return (
    <div className={styles.point}>
      <div className={styles.left}>
        <input
          type="checkbox"
          className={styles.checkBox}
          checked={checked}
          onClick={(event) => {
            setChecked(event.target.checked);
            dispatch(edit({...info, isDone: event.target.checked}))
          }}
        />
        <p>{info.title}</p>
      </div>
      <div className={styles.right}>
        <p
          onClick={() => {
            dispatch(put(info));
          }}
          className={styles.edit}
        >
          EDIT
        </p>
        <p
          onClick={() => {
            dispatch(get(info));
          }}
          className={styles.details}
        >
          DETAILS
        </p>
      </div>
    </div>
  );
};

export default ListBullet;
