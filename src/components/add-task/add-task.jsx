import React, { useState } from "react";
import styles from "./add-task.module.css";
import { initialData } from "../../store/initialState";
import { create, closeEditor } from "../../store/reducer";
import { useDispatch } from "react-redux";

const listCategory = initialData.list.map((list) => (
  <option key={list} value={list}>{list}</option>
));

const AddTask = ({ info }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [list, setList] = useState(initialData.list[0]);
  const dispatch = useDispatch();
  return (
    <>
      <div className={styles.main}>
        <h1 className={styles.title}>ADD TASK</h1>

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
            <input
              type="date"
              onChange={(event) => setDueDate(event.target.value)}
            />
          </div>
        </div>
      </div>
      <div className={styles.buttonsContainer}>
        <button
          className={styles.delete}
          onClick={() => {
            dispatch(remove({ id: info.id }));
            dispatch(closeEditor());
          }}
        >
          Cancel
        </button>
        <button
          className={styles.save}
          onClick={() => {
            dispatch(
              create({
                id: Math.random(),
                title: title,
                description: description,
                dueDate: dueDate,
                list: list,
                isDone: false,
              })
            );
            dispatch(closeEditor());
          }}
        >
          Save Task
        </button>
      </div>
    </>
  );
};

export default AddTask;
