import React, { useState, useEffect } from "react";
import styles from "./edit-task.module.css";
import { initialData } from "../../store/initialState";
import { useDispatch } from "react-redux";
import { edit, remove, closeEditor } from "../../store/reducer";

const listCategory = initialData.list.map((list) => (
  <option key={list} value={list}>{list}</option>
));

const EditTask = ({ info }) => {
  const [title, setTitle] = useState(info.title);
  const [description, setDescription] = useState(info.description);
  const [dueDate, setDueDate] = useState(info.dueDate);
  const [list, setList] = useState(info.list);
  const dispatch = useDispatch();
  return (
    <>
      <div className={styles.main}>
        <h1 className={styles.title}>EDIT TASK</h1>

        <div className={styles.inputContainer}>
          <textarea
            type="text"
            placeholder="Title"
            className={`${styles.input}`}
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <textarea
            type="text"
            placeholder="Description"
            className={`${styles.input} ${styles.bigInput}`}
            onChange={(event) => setDescription(event.target.value)}
            value={description}
          />
        </div>
        <div className={styles.dataContainer}>
          <div className={styles.listKey}>
            <h3 className={styles.key}>List</h3>
          </div>
          <div className={styles.listValue}>
            <select
              value={list}
              onChange={(event) => setList(event.target.value)}
            >
              {listCategory}
            </select>
          </div>
          <div className={styles.dateKey}>
            <h3 className={styles.key}>Due Date</h3>
          </div>
          <div className={styles.dateValue}>
            <input type="date" onChange={(event) => setDueDate(event.target.value)}/>
          </div>
        </div>
      </div>
      <div className={styles.buttonsContainer}>
        <button
          className={styles.delete}
          onClick={() => {
            dispatch(remove({ id: info.id }));
            dispatch(closeEditor())
          }}
        >
          Delete Task
        </button>
        <button
          className={styles.save}
          onClick={() => {
            dispatch(
              edit({
                id: info.id,
                title: title,
                description: description,
                dueDate: dueDate,
                list: list,
                isDone: false
              })
            );
            dispatch(closeEditor())
          }}
        >
          Save Task
        </button>
      </div>
    </>
  );
};

export default EditTask;
