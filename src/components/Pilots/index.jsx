import React, { useEffect, useState } from "react";
import imgPilot from "../../assets/img_pilot.png";

function Pilots() {
  const [pilots, setPilots] = useState([]);
  useEffect(() => {
    fetch("https://swapi.dev/api/people/?format=json")
      .then((res) => res.json())
      .then((result) => {
        setPilots(result.results);
      });
  }, []);

  return (
    <main className="container">
      <h1>Pilots</h1>
      <section className="cards_ships cards">
        {pilots.map((pilot)=> (
          <div key={pilot.name} className="card">
            <img src={imgPilot} alt="Star ship" />
            <p>{pilot.name}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Pilots;
