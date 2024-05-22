import React, { useState } from "react";
import styles from "./list.module.css";
import ListBullet from "../../components/list/list-bullet";
import { initialData, listViewCategory } from "../../store/initialState";
import { useDispatch, useSelector } from "react-redux";
import { post } from "../../store/reducer";

const List = () => {
  const selector = useSelector((state) => state.todoReducer.view);
  const listSelector = useSelector((state) => state.listReducer.list);
  const addTodoDispatch = useDispatch();
  const thisYear = new Date().getFullYear();
  let thisMonth = new Date().getMonth() + 1;
  const thisDate = new Date().getDate();

  const todoList = listSelector.map((data) => (
    <ListBullet key={data.id} info={data} />
  ));

  if (thisMonth < 10) {
    thisMonth = `0${thisMonth}`;
  }

  const today = `${thisYear}-${thisMonth}-${thisDate}`;

  class todoViewList {
    constructor(name) {
      this.name = name;
    }
    render() {
      const todoListByList = listSelector
        .filter((data) => data.list === this.name)
        .map((data) => <ListBullet key={data.id} info={data} />);
      console.log(todoListByList);
      return todoListByList;
    }
  }
  const todoListToday = listSelector
    .filter((data) => data.dueDate.includes(today))
    .map((data) => <ListBullet key={data.id} info={data} />);
  const todoListUpcoming = listSelector
    .filter((data) => data.dueDate.substring(0, 4) >= thisYear)
    .filter((data) => data.dueDate.substring(5, 7) >= thisMonth)
    .filter((data) => data.dueDate.substring(8, 10) >= thisDate)
    .map((data) => <ListBullet key={data.id} info={data} />);
  const todoListDone = listSelector
    .filter((data) => data.isDone === true)
    .map((data) => <ListBullet key={data.id} info={data} />);
  let renderList;
  if (selector === 0) {
    renderList = todoListToday;
  } else if (selector === 1) {
    renderList = todoListUpcoming;
  } else if (selector === 2) {
    renderList = todoListDone;
  } else {
    const listTodo = new todoViewList(listViewCategory[selector]);
    renderList = listTodo.render();
  }

  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <h1 className={styles.text}>{listViewCategory[selector]}</h1>
        <div className={styles.amount}>
          <h2 className={`${styles.text} ${styles.number}`}>
            {renderList.length}
          </h2>
        </div>
      </div>
      <div className={styles.list}>{renderList}</div>
      <div
        onClick={() => {
          addTodoDispatch(post());
        }}
      >
        <h3>Add Task +</h3>
      </div>
    </div>
  );
};

export default List;
