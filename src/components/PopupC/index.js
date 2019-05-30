import React from "react";
import styles from "./styles.module.css";

export default ({ makeClose }) => {
  return (
    <div className={styles.wrap} onClick={makeClose}>
      ccc
    </div>
  );
};
