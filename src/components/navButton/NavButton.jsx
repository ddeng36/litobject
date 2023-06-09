import React from "react";
import "./NavButton.scss";
import MenuIcon from "@mui/icons-material/Menu";
const NavButton = () => {
  return (
    <div className="navButton">
      <div className="btn">
        <MenuIcon fontSize="large" />
      </div>
    </div>
  );
};

export default NavButton;
