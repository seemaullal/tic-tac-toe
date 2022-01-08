import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div id="home-banner" className="row">
      <div className="col">
        <Link to="/play">
          <h1>Play some Tic Tac Toe!</h1>
        </Link>
      </div>
    </div>
  );
}
