import styles from "./Header.module.css";
import { ReactComponent as Logo } from "../images/Logo.svg";
import React from "react";
import Menu from "./Menu";
import Wrapper from "./Wrapper";

function Header() {
  return (
    <header className={styles.container}>
      <Wrapper>
        <Logo />
        <Menu />
      </Wrapper>
    </header>
  );
}

export default Header;
