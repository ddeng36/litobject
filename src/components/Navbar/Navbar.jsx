import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="content">
        <div className="top">
          <span>LIT</span>
          <span>OBJECT</span>
        </div>
        <div className="center">
          <ul>
            <li>
              <Link>About</Link>
            </li>
            <li>
              <Link>Projects</Link>
            </li>
            <li>
              <Link>Publications</Link>
            </li>
            <li>
              <Link>News</Link>
            </li>
            <li>
              <Link>Contacts</Link>
            </li>
          </ul>
        </div>
        <div className="bottom">
          <span>News:</span>
          <ul>
            <li>
              <Link>HIROSHIMA Armchair at G7 summit in Hiroshima</Link>
            </li>
            <li>
              <Link>Milan Design Week 2023, UP TO YOU ANTHOLOGY</Link>
            </li>
            <li>
              <Link>Milan Design Week 2023, PLANK</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
