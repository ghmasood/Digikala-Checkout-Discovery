import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./navbar.module.scss";
import { icons } from "components/icons";

function NavBar() {
  const loc = useLocation().pathname.slice(1);

  return (
    <div className={styles.navroot}>
      <div className={styles.section}>
        <span className={styles.item}>
          <img src="/images/logo.png" />
        </span>
        <span className={styles.item}>{icons.menu()}</span>
        <Link to={"/"} className={styles.item}>
          {loc === "" ? icons.homeActive() : icons.home()}
        </Link>
        <Link to={"/cart"} className={styles.item}>
          {loc === "cart" ? icons.cartActive() : icons.cart()}
        </Link>
      </div>
      <div className={styles.section}>
        <span className={styles.item}>{icons.logout()}</span>
      </div>
    </div>
  );
}

export default NavBar;
