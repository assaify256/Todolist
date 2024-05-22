import React from "react";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.brand}>To Do List App by Assaify Developer</h1>
    </div>
  );
};

export default Header;
