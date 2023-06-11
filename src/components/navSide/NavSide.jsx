import React, { Children } from "react";
import "./NavSide.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import NavButton from "../../components/navButton/NavButton";
import Footer from "../footer/Footer";
const NavSide = ({ chirldren }) => {
  return (
    <div className="navSide">
      <div className="navSide-sidebar">
        <Sidebar />
      </div>
      <div className="navSide-navbar">
        <Navbar />
      </div>
      <div className="navButton">
        <NavButton />
      </div>
      <div className="children">{chirldren}</div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default NavSide;
