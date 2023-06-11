import React, { useState } from "react";
import "./Projects.scss";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import NavButton from "../../components/navButton/NavButton";
import data from "../../constants/data";
import Card from "../../components/card/Card";
const Projects = () => {
  const [categoty, setCategory] = useState(data.filterData[0].name);

  return (
    <div className="projects">
      <div className="nabButton">
        <NavButton />
      </div>
      <div className="top">
        <Navbar />
      </div>
      <div className="center">
        <div className="left">
          <div className="filter">
            <ul>
              {data.filterData.map((item, index) => (
                <li
                  key={index}
                  onClick={() => setCategory(item.name)}
                  className={categoty === item.name ? "active" : ""}
                >
                  <div>{item.name}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="right">
          {data.productsData.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="bottom">
        <Footer />
      </div>
    </div>
  );
};

export default Projects;
