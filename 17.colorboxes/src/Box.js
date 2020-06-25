import React from "react";
import "./Box.css";
import { choice } from "./helper";

class Box extends React.Component {
  static defaultProps = {
    allColors: ["purple", "green", "red", "pink"],
  };
  constructor(props) {
    super(props);
    this.state = {
      color: choice(this.props.allColors),
    };
    this.handleClick = this.handleClick.bind(this);
  }
  pickColor() {
    let newColor;
    do {
      newColor = choice(this.props.allColors);
    } while (this.state.color === newColor);
    this.setState({
      color: newColor,
    });
  }

  handleClick() {
    this.pickColor();
  }
  render() {
    return (
      <div
        className="Box"
        style={{ backgroundColor: this.state.color }}
        onClick={this.handleClick}
      ></div>
    );
  }
}

export default Box;
