import React, { Component } from "react";
import { connect } from "react-redux";
import { FetchUserAuthData } from "../../redux/action/auth";
import Navui from "./navui";

class Navigation extends Component {
  componentDidMount() {
    this.props.FetchUserAuthData();
  }
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
        <Navui />
      </nav>
    );
  }
}
const mapStateToProps = state => {
  console.log("User Auth", state);
  return state;
};

export default connect(mapStateToProps, { FetchUserAuthData })(Navigation);
