import React from "react";
import "./Lotto.css";

class Lotto extends React.Component {
  render() {
    return <div className="Ball">{this.props.num}</div>;
  }
}

export default Lotto;
