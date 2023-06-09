import React from "react";
import "./News.scss";
import { Link } from "react-router-dom";
const News = () => {
  return (
    <div className="news">
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
  );
};

export default News;
