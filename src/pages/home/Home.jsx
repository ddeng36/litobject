import React from "react";
import "./Home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Slider from "../../components/slider/Slider";
import Language from "../../components/language/Language";
import NavButton from "../../components/navButton/NavButton";
const Home = () => {
  return (
    <div className="home">
      <Slider />
    </div>
  );
};

export default Home;
