import React, { useState, useEffect } from "react";
import imgShip from "../../assets/img_starShip.png";
import "./styles.css";

function Starships() {
  const [ships, setShips] = useState([]);
  useEffect(() => {
    fetch(" https://swapi.dev/api/starships/?format=json")
      .then((res) => res.json())
      .then((result) => {
        setShips(result.results);
      });
  }, []);

  return (
    <div className="container">
      <h1>Starships</h1>
      <section className="cards_ships cards">
        {ships.map((ship) => (
          <div key={ship.name} className="card">
            <img src={imgShip} alt="Star ship" />
            <p>{ship.name}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Starships;
