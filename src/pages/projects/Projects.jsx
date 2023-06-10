import React, { useState } from "react";
import "./Projects.scss";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import NavButton from "../../components/navButton/NavButton";
import data from "../../constants/data";
const Projects = () => {
  const [categoty, setCategory] = useState(data.filterData[0].name);
  console.log(data.filterData);
  return (
    <div className="projects">
      <div className="top">
        <Navbar />
        <div className="button">
          <NavButton />
        </div>
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
        <div className="right">1</div>
      </div>
      <div className="bottom">
        <Footer />
      </div>
    </div>
  );
};

export default Projects;
