import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import Title from "../title/Title";
import News from "../news/News";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="content">
        <div className="top">
          <Title />
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
            <News />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
