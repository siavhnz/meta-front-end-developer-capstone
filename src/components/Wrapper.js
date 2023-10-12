import React from "react";
import styels from "./Wrapper.module.css";

function Wrapper({ children }) {
  return <div className={styels.container}>{children}</div>;
}

export default Wrapper;
