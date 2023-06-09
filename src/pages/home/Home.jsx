import React from "react";
import "./Home.scss";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider";
import Language from "../../components/language/Language";
import NavButton from "../../components/navButton/NavButton";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Slider />
      <div className="topRight">
        <Language />
        <NavButton />
      </div>
    </div>
  );
};

export default Home;
