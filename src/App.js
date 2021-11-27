import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Pilots from "./components/Pilots";
import Starships from "./components/Starships";
import Nav from "./components/Nav";

function App() {
  const [dataPilots, setDataPilots] = useState({});
  const [dataShips, setDataShips] = useState({});

  const searchPilots = () => {
    fetch(" https://swapi.dev/api/people/?format=json")
      .then((res) => res.json())
      .then((result) => {
        setDataPilots({
          luke: result.results[0].name,
          c3po: result.results[1].name,
          r2d2: result.results[2].name,
          darth_vader: result.results[3].name,
          leia_organa: result.results[4].name,
          owen_lars: result.results[5].name,
          beru: result.results[6].name,
          r5d4: result.results[7].name,
          biggs: result.results[8].name,
          kenobi: result.results[9].name,
        });
      });
  };

  const searchShips = () => {
    fetch(" https://swapi.dev/api/starships/?format=json")
      .then((res) => res.json())
      .then((result) => {
        setDataShips({
          cr90: result.results[0].name,
          destroyer: result.results[1].name,
          sentinel: result.results[2].name,
          death_star: result.results[3].name,
          falcon: result.results[4].name,
          y_wing: result.results[5].name,
          x_wing: result.results[6].name,
          advanced: result.results[7].name,
          executor: result.results[8].name,
          rebel_transport: result.results[9].name,
        });
      });
  };

  return (
    <div className="App">
      <Router>
        <Nav searchPilots={searchPilots} searchShips={searchShips} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/starships"
            element={<Starships dataShips={dataShips}/>}
          />
          <Route path="/pilots" element={<Pilots dataPilots={dataPilots}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
