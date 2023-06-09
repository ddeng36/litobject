import React, { useState } from "react";
import "./NavButton.scss";
import Title from "../title/Title";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Navlist from "../navlist/Navlist";
import Language from "../language/Language";
const NavButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="navButton">
      <div
        className="btn"
        onClick={() => {
          setOpen(true);
        }}
      >
        <div className="icon">
          <MenuIcon fontSize="large" />
        </div>
      </div>
      {open && (
        <div className="menu">
          <div className="top">
            <Title />
            <div className="icon">
              <CloseIcon
                fontSize="large"
                onClick={() => {
                  setOpen(false);
                }}
              />
            </div>
          </div>
          <div className="center">
            <Navlist />
          </div>
          <div className="bottom">
            <Language />
          </div>
        </div>
      )}
    </div>
  );
};

export default NavButton;
