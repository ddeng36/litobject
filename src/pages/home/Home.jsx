import React from "react";
import "./Home.scss";
import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/Slider/Slider";
const Home = () => {
  return (
    <div className="home">
      
      <Navbar />
      
      <Slider />
    </div>
  );
};

export default Home;
