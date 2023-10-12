import React from "react";
import Wrapper from "./Wrapper";
import RestaurantImage from "./../images/restauranfood.png";
import styles from "./Hero.module.css";
import Link from "./ui/Link";
import { NavLink } from "react-router-dom";

function Hero() {
  return (
    <Wrapper>
      <div className={styles.container}>
        <div>
          <h1 className={styles.title}>Little Lemon</h1>
          <p className={styles.subtitle}>Chicago</p>
          <p className={styles.paragraph}>
            Fresh, flavorful, and satisfying salads made with quality, locally
            sourced ingredients. We're passionate about providing our customers
            with a delicious and healthy meal option.
          </p>
          <div className={styles.button}>
            <NavLink to="/reservation">
              <Link>Reserve a Table</Link>
            </NavLink>
          </div>
        </div>
        <div className={styles.img}>
          <img src={RestaurantImage} alt="restaurant" />
        </div>
      </div>
    </Wrapper>
  );
}

export default Hero;
