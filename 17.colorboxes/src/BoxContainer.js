import React from "react";
import Box from "./Box";
import "./BoxContainer.css";

class BoxContainer extends React.Component {
  static defaultProps = {
    allColors: ["purple", "green", "red", "pink"],
    num: 16,
  };

  render() {
    let boxes = Array.from({ length: this.props.num }).map(() => {
      return <Box allColors={this.props.allColors} />;
    });

    return <div className="container">{boxes}</div>;
  }
}

export default BoxContainer;
