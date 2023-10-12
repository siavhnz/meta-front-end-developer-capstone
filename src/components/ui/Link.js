import React from "react";
import styles from "./Link.module.css";
function Link({ props, children }) {
  return (
    <span className={styles.container} {...props}>
      {children}
    </span>
  );
}

export default Link;
