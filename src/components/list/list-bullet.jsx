import React from "react";
import styles from "./list-bullet.module.css";
import { useDispatch } from "react-redux";
import {get, put} from "../../store/reducer"
import { initialData } from "../../store/initialState";

const ListBullet = ({info}) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.point}>
      <div className={styles.left}>
        <input type="checkbox" className={styles.checkBox} checked={info.isDone}/>
        <p>{info.title}</p>
      </div>
      <div className={styles.right}>
        <p onClick={()=> {dispatch(put(info))}} className={styles.edit}>EDIT</p>
        <p onClick={()=> {dispatch(get(info))}} className={styles.details}>DETAILS</p>
      </div>
    </div>
  );
};

export default ListBullet;
