import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";
const Card = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`} className="link">
      <div className="card">
        <div className="image">
          <img src={item.img} alt="" className="mainImg" />
          <img src={item.img2} alt="" className="secondImg" />
        </div>
        <span>{item.title}</span>
      </div>
    </Link>
  );
};

export default Card;
