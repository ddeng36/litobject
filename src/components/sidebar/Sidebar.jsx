import React from "react";
import "./Sidebar.scss";
import Title from "../title/Title";
import News from "../news/News";
import Navlist from "../navlist/Navlist";
const Sidebar = () => {
  return (
    <div className="sidebar">
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

export default Sidebar;
