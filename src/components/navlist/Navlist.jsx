import React from "react";
import "./Navlist.scss";
import { Link } from "react-router-dom";
const Navlist = () => {
  return (
    <div className="navlist">
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link>Publications</Link>
        </li>
        <li>
          <Link>News</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navlist;
