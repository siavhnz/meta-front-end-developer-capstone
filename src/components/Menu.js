import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Menu.module.css";

function Menu() {
  return (
    <div>
      <ul className={styles.container}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/reservation"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Reservation
          </NavLink>
        </li>
        <li>About</li>
        <li>Menu</li>
        <li>Delivery Basket</li>
        <li>Login</li>
      </ul>
    </div>
  );
}

export default Menu;
