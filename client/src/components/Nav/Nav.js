import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <h2>MERN</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/team">Team</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/Dataform">Dataform</Link>
          <Link to="/Data">Data</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
