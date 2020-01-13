import React, { Component } from "react";
import { connect } from "react-redux";
import { googleAuth } from "../../redux/action/auth";

class Login extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6" style={{ margin: "20px" }}>
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={() => this.props.googleAuth()}
            >
              Google Auth
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { googleAuth })(Login);
