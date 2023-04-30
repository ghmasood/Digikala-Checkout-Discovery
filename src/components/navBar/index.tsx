import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BsCartFill } from "react-icons/bs";
import styles from "./navbar.module.scss";
import { useAppSelector } from "../../store/hook";

function NavBar() {
  const cardQty = useAppSelector((store) => store.cart).total;

  return (
    <div className={styles.navroot}>
      <Link to={""}>
        <AiFillHome color="fff" size={"1.8rem"} />
      </Link>
      <Link to={"/cart"} className={styles.cartgroup}>
        <BsCartFill color="fff" size={"1.8rem"} />
        <span className={styles.qty}>{cardQty}</span>
      </Link>
    </div>
  );
}

export default NavBar;
