import React from "react";
import "./Navbar.scss";
import Title from "../title/Title";
import News from "../news/News";
import Navlist from "../navlist/Navlist";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="content">
        <div className="top">
          <Title />
        </div>
        <div className="center">
          <Navlist />
        </div>
        <div className="bottom">
          <News />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
