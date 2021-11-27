import React from "react";
import imgShip from "../../assets/img_starShip.png";
import "./styles.css";

function Starships({ dataShips }) {
  console.log(dataShips);

  return (
    <div className="container">
      <h1>Starships</h1>

      <section className="cards_ships cards">
        <div className="card">
          <img src={imgShip} alt="" />
          <p>{dataShips.cr90}</p>
        </div>
        <div className="card">
          <img src={imgShip} alt="" />

          <p>{dataShips.destroyer}</p>
        </div>
        <div className="card size">
          <img src={imgShip} alt="" />

          <p>{dataShips.sentinel}</p>
        </div>
        <div className="card">
          <img src={imgShip} alt="" />

          <p>{dataShips.death_star}</p>
        </div>
        <div className="card">
          <img src={imgShip} alt="" />

          <p>{dataShips.falcon}</p>
        </div>
        <div className="card">
          <img src={imgShip} alt="" />

          <p>{dataShips.y_wing}</p>
        </div>
        <div className="card">
          <img src={imgShip} alt="" />

          <p>{dataShips.x_wing}</p>
        </div>
        <div className="card">
          <img src={imgShip} alt="" />

          <p>{dataShips.advanced}</p>
        </div>
        <div className="card">
          <img src={imgShip} alt="" />

          <p>{dataShips.executor}</p>
        </div>
        <div className="card">
          <img src={imgShip} alt="" />

          <p>{dataShips.rebel_transport}</p>
        </div>
      </section>
    </div>
  );
}

export default Starships;
