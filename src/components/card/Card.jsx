import React,{useState} from "react";
import "./Card.scss";
import { Link } from "react-router-dom";
const Card = ({ item }) => {
    const [hover,setHover]=useState(false)
  return (
    <Link to={`/projects/${item.id}`} className="link"
        onMouseEnter={()=>setHover(true)}
        onMouseLeave={()=>setHover(false)}
    >
      <div className="card">
        <div className="image">
          <img src={item.img[0]} alt="" className={`mainImg ${hover ? "fade" : ""}`}  />
          <img src={item.img[1]} alt="" className={`secondImg ${hover ? "active" : ""}`} />
        </div>
        <div className="title">{item.title}</div>
      </div>
    </Link>
  );
};

export default Card;
