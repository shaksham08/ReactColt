import React from "react";
import Lotto from "./Lotto";
import "./Lottery.css";

class Lottery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: Array.from({ length: this.props.numBalls }),
    };

    this.generatelotto = this.generatelotto.bind(this);
  }
  static defaultProps = {
    maxNum: 40,
    numBalls: 6,
    title: "Lotto",
  };

  generatelotto() {
    this.setState((cureState) => ({
      num: cureState.num.map((el) => {
        return Math.floor(Math.random() * this.props.maxNum) + 1;
      }),
    }));
  }

  render() {
    const balls = [];
    for (let i = 0; i < this.props.numBalls; i++) {
      balls.push(this.state.num[i]);
    }

    return (
      <div className="Lottery">
        <h1>{this.props.title}</h1>
        <div>
          {this.state.num.map((el) => {
            return <Lotto num={el} />;
          })}
        </div>
        <button onClick={this.generatelotto}>Generate</button>
      </div>
    );
  }
}

export default Lottery;
