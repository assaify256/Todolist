import React from "react";
import styles from "./main.module.css";
import { FaBars } from "react-icons/fa6";
import EditTask from "../edit-task/edit-task";
import ListView from "../../view/list-view/List";
import DetailsTask from "../details-task/details-task";
import { initialData, listViewCategory } from "../../store/initialState";
import { useDispatch, useSelector } from "react-redux";
import { editView } from "../../store/reducer";
import AddTask from "../add-task/add-task";

const Main = () => {
  const viewSelector = useSelector((state) => state.viewReducer.type);
  const dataSelector = useSelector((state) => state.viewReducer.data);
  const dispatch = useDispatch();
  const ListCategories = initialData.list.map((category) => (
    <h3
      className={`${styles.text} ${styles.plainText}`}
      key={category}
      onClick={() => dispatch(editView(listViewCategory.indexOf(category)))}
    >
      {category}
    </h3>
  ));

  let viewMode
  if (viewSelector === "get") {
    viewMode = <DetailsTask info={dataSelector}/>
  } else if (viewSelector === "post") {
    viewMode = <AddTask info={dataSelector}/>
  } else if (viewSelector === "put") {
    viewMode = <EditTask info={dataSelector}/>
  } else {
    viewMode = <div>
    </div>
  }
  return (
    <div className={styles.main}>
      <div className={styles.first}>
        <div className={styles.menu}>
          <h3 className={styles.text}>MENU</h3>
          <h3>
            <FaBars />
          </h3>
        </div>
        <div className={styles.search}>
          <span className={`material-symbols-outlined ${styles.icon}`}>
            search
          </span>
          <input type="text" className={styles.input} placeholder="Search" />
        </div>
        <div className={styles.view}>
          <div>
            <h4 className={`${styles.text} ${styles.submenu}`}>VIEW</h4>
          </div>
          <div>
            <h3 className={`${styles.text} ${styles.plainText}`}>List View</h3>
            <h3 className={`${styles.text} ${styles.plainText}`}>
              Calendar View (Under Development)
            </h3>
            <h3 className={`${styles.text} ${styles.plainText}`}>
              Timeline View (Under Development)
            </h3>
          </div>
        </div>
        <div className={styles.category}>
          <div>
            <h4 className={`${styles.text} ${styles.submenu}`}>CATEGORY</h4>
          </div>
          <div>
            <h3
              className={`${styles.text} ${styles.plainText}`}
              onClick={() => dispatch(editView(0))}
            >
              Today
            </h3>
            <h3
              className={`${styles.text} ${styles.plainText}`}
              onClick={() => dispatch(editView(1))}
            >
              Upcoming
            </h3>
            <h3
              className={`${styles.text} ${styles.plainText}`}
              onClick={() => dispatch(editView(2))}
            >
              Done
            </h3>
          </div>
        </div>
        <div className={styles.list}>
          <div>
            <h4 className={`${styles.text} ${styles.submenu}`}>LIST</h4>
          </div>
          <div>
            {ListCategories}
            <div>
              {/* <button className={styles.button}>
                Add New List
                <span className={`material-symbols-outlined ${styles.add}`}>
                  add
                </span>
              </button> */}
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div className={styles.second}>
        <ListView />
      </div>
      <div className={styles.third}>
        {viewMode}
      </div>
    </div>
  );
};

export default Main;
