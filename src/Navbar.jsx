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
    </nav>
  );
}
