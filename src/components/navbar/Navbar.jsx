import React from "react";
import "./Navbar.scss";
import Title from "../title/Title";
import Language from "../language/Language";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="content">
        <Title />
        <div className="nav-language">

        <Language />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
