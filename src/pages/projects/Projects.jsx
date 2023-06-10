import React, { useState } from "react";
import "./Projects.scss";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import NavButton from "../../components/navButton/NavButton";
import data from "../../constants/data";
import Card from "../../components/card/Card";
const data2 = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    img2: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "A nice product",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/1549202/pexels-photo-1549202.jpeg?auto=compress&cs=tinysrgb&w=1600",
    img2: "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "radom product",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1549100/pexels-photo-1549100.jpeg?auto=compress&cs=tinysrgb&w=1600",
    img2: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "another product",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/949671/pexels-photo-949671.jpeg?auto=compress&cs=tinysrgb&w=1600",
    img2: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "some product",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1549100/pexels-photo-1549100.jpeg?auto=compress&cs=tinysrgb&w=1600",
    img2: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "another product",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/949671/pexels-photo-949671.jpeg?auto=compress&cs=tinysrgb&w=1600",
    img2: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "some product",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1549100/pexels-photo-1549100.jpeg?auto=compress&cs=tinysrgb&w=1600",
    img2: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "another product",
    oldPrice: 98,
    price: 8,
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/949671/pexels-photo-949671.jpeg?auto=compress&cs=tinysrgb&w=1600",
    img2: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "some product",
  },
];
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
        <div className="right">
          {data2.map((item) => (
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
