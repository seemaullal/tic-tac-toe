import React from "react";
import { Link, NavLink } from "react-router-dom";
import logoPath from "./images/tic-tac.png";

export default function Navbar() {
  return (
    <nav>
      <Link to="/" className="navbar-brand d-flex justify-content-center">
        <img src={logoPath} height="30" alt="logo" />
        <span>Tic Tac Toe</span>
      </Link>

      <section className="d-flex justify-content-end">
        <NavLink
          to="/play"
          activeClassName="navlink-active"
          className="nav-link nav-item"
        >
          Play
        </NavLink>
      </section>
    </nav>
  );
}
