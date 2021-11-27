import React from "react";
import "./styles.css";

import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container_home">
      <div className="back_img"></div>
      <section className="section_nav">
        <Link to="/starships">Starships</Link>
        <Link to="/pilots">Pilots</Link>
      </section>
    </div>
  );
}

export default Home;
