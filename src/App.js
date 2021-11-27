import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Pilots from "./components/Pilots";
import Starships from "./components/Starships";
import Nav from "./components/Nav";

function App() {
  
  return (
    <div className="App">
      <Router>
        <Nav/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/starships" element={<Starships />} />
          <Route path="/pilots" element={<Pilots />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
