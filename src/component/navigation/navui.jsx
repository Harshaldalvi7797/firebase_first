import React from "react";
import { Link } from "react-router-dom";

const Navui = () => {
  return (
    <React.Fragment>
      <Link className="navbar-brand" to="/home">
        Navbar
      </Link>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      ></button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link className="nav-link" to="/home">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              Link
            </Link>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
export default Navui;
