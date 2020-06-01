import React from "react";
import Lotto from "./Lotto";

class Lottery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: [],
    };

    this.generatelotto = this.generatelotto.bind(this);
    this.generatelotto();
  }
  static defaultProps = {
    maxNum: 40,
    numBalls: 6,
    title: "Lotto",
  };
  generatelotto() {
    let numbers = [];
    for (let i = 0; i < this.props.numBalls; i++) {
      numbers.push(Math.floor(Math.random() * this.props.maxNum) + 1);
    }
    console.log(numbers);
    this.setState({
      num: [numbers],
    });
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <Lotto />
        <button onClick={this.generatelotto}>CLick</button>
      </div>
    );
  }
}

export default Lottery;
