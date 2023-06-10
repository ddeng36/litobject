import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/projects">
            <Route index element={<Projects />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
