import React from "react";
import "./Home.scss";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider";
import NavbarSm from "../../components/navbarSm/NavbarSm";
const Home = () => {
  return (
    <div className="home">
      
      <Navbar />
      <NavbarSm />
      <Slider />
    </div>
  );
};

export default Home;
