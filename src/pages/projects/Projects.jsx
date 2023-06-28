import React, { useState } from "react";
import "./Projects.scss";
import data from "../../constants/data";
import Card from "../../components/card/Card";
const Projects = () => {
  const [categoty, setCategory] = useState(data.filterData[0].name);

  return (
    
    <div className="projects">
      <div className="center">
        <div className="right">
          {data.productsData.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
