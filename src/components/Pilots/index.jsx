import React from "react";
import imgPilot from "../../assets/img_pilot.png";

function Pilots(dataPilots) {
  console.log(dataPilots);

  return (
    <main className="container">
      <h1>Pilots</h1>
      <section className="cards_ships cards">
        <div className="card">
          <img src={imgPilot} alt="" />
          <p>{dataPilots.dataPilots.luke}</p>
        </div>
        <div className="card">
          <img src={imgPilot} alt="" />

          <p>{dataPilots.dataPilots.c3po}</p>
        </div>
        <div className="card size">
          <img src={imgPilot} alt="" />

          <p>{dataPilots.dataPilots.r2d2}</p>
        </div>
        <div className="card">
          <img src={imgPilot} alt="" />

          <p>{dataPilots.dataPilots.darth_vader}</p>
        </div>
        <div className="card">
          <img src={imgPilot} alt="" />

          <p>{dataPilots.dataPilots.leia_organa}</p>
        </div>
        <div className="card">
          <img src={imgPilot} alt="" />

          <p>{dataPilots.dataPilots.owen_lars}</p>
        </div>
        <div className="card">
          <img src={imgPilot} alt="" />

          <p>{dataPilots.dataPilots.beru}</p>
        </div>
        <div className="card">
          <img src={imgPilot} alt="" />

          <p>{dataPilots.dataPilots.r5d4}</p>
        </div>
        <div className="card">
          <img src={imgPilot} alt="" />

          <p>{dataPilots.dataPilots.biggs}</p>
        </div>
        <div className="card">
          <img src={imgPilot} alt="" />

          <p>{dataPilots.dataPilots.kenobi}</p>
        </div>
      </section>
    </main>
  );
}

export default Pilots;
