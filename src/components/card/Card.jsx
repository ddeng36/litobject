import React,{useState} from "react";
import "./Card.scss";
import { Link } from "react-router-dom";
const Card = ({ item }) => {
    const [hover,setHover]=useState(false)
  return (
    <Link to={`/product/${item.id}`} className="link"
        onMouseEnter={()=>setHover(true)}
        onMouseLeave={()=>setHover(false)}
    >
      <div className="card">
        <div className="image">
          <img src={item.img} alt="" className={`mainImg ${hover ? "fade" : ""}`}  />
          <img src={item.img2} alt="" className={`secondImg ${hover ? "active" : ""}`} />
        </div>
        <div className="title">{item.title}</div>
      </div>
    </Link>
  );
};

export default Card;
