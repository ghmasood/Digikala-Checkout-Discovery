import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div
      style={{
        backgroundColor: "rgb(239, 57, 78)",
        width: "100%",
        height: "2rem",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <Link to={""}>HOME</Link>
      <Link to={"/cart"}>CART</Link>
    </div>
  );
}

export default NavBar;
