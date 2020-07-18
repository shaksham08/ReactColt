import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  handleClick() {
    alert("Looged in ");
    this.props.history.push("/food/fish");
  }

  handleBack() {
    this.props.history.goBack();
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Login</button>
        <button onClick={this.handleBack}>Back</button>
      </div>
    );
  }
}

export default withRouter(Navbar);
