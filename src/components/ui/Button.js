import React from "react";
import styles from "./Button.module.css";
function Button({ props, children }) {
  return (
    <button className={styles.container} {...props}>
      {children}
    </button>
  );
}

export default Button;
