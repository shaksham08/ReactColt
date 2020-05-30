import React from "react";
import "./Die.css";

class Die extends React.Component {
  render() {
    return (
      <i
        className={`die fas fa-dice-${this.props.face} ${
          this.props.rolling && "rolling"
        }`}
      ></i>
    );
  }
}

export default Die;
