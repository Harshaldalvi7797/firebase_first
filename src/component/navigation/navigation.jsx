import React, { Component } from "react";
import Navui from "./navui";

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
        <Navui />
      </nav>
    );
  }
}

export default Navigation;
