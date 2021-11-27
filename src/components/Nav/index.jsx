import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav className="nav_bar">
      <h1>Star Wars catalog</h1>

      <ul>
        <span className="line"></span>
        <li>
          <Link to="/">Home</Link>
        </li>
        <span className="line"></span>
        <li>
          <Link to="/starships" >
            Starships
          </Link>
        </li>
        <span className="line"></span>
        <li>
          <Link to="/pilots">
            Pilots
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
