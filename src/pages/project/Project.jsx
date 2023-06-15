import React from "react";
import data from "../../constants/data";
import { useParams } from "react-router-dom";
import "./Project.scss";
const Project = () => {
  const info = data.productsData[useParams().id - 1];
  return (
    <div className="project">
      <div className="info">
        <div className="info-title">{info.title}</div>
        <div className="info-category">{info.category}</div>
        <div className="info-desc">{info.desc}</div>
      </div>
      <div className="imgs">
        {info.img.map((item, index) => {
          return <img className="project-img" src={item} alt="" key={index} />;
        })}
      </div>
    </div>
  );
};

export default Project;
