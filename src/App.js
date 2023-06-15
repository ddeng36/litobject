import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import NavSide from "./components/navSide/NavSide";
import Project from "./pages/project/Project";
import About from "./pages/about/About";
import { NoAccounts } from "@mui/icons-material";
const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavSide chirldren={<Home/>}></NavSide>} />
          <Route
            path="/about"
            element={<NavSide chirldren={<About />}></NavSide>}
          />
          <Route path="/projects">
            <Route index element={<NavSide chirldren={<Projects />}></NavSide>} />
            <Route path=":id" element={<NavSide chirldren={<Project/>}></NavSide>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
