import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Link
      style={{
        backgroundColor: "rgb(239, 57, 78)",
        width: "100%",
        height: "2rem",
        display: "flex",
      }}
      to={"/"}
    >
      HOME
    </Link>
  );
}

export default NavBar;
