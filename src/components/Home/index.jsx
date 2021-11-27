import React from "react";
import "./styles.css";

import { Link } from "react-router-dom";
import img_bg from "../../assets/home_bg.png"


function Home() {


  return (
    <div className="container_home">

      <section className="section_nav">
        <img src={img_bg} alt="" />
        <div>
          <Link to="/starships">Starships</Link>
      
          <Link to="/pilots">Pilots</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
