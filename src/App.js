import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
import NavSide from "./components/navSide/NavSide";
import About from "./pages/about/About";
const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<NavSide chirldren={<About/>}></NavSide>}/>
          <Route path="/projects">
            <Route index element={<Projects />} />
          </Route>

          <Route path='/contact' element={<NavSide chirldren={<Contact/>}></NavSide>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
