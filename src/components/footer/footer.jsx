import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
    return (
        <div className={styles.main}>
            <h5 className={styles.text}>Created by Ziyan Nafis Assaify, 2024</h5>
            <h5 className={styles.text}>Inspired from https://uizard.io/templates/website-templates/to-do-website/</h5>
        </div>
    )
}

export default Footer;