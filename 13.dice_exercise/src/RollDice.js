import React from "react";
import Die from "./Die";
import "./RollDice.css";

class RollDice extends React.Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"],
    isRolling: false,
  };
  constructor(props) {
    super(props);
    this.state = {
      die1: "one",
      die2: "one",
    };
    this.rollDie = this.rollDie.bind(this);
  }

  rollDie() {
    this.setState({ isRolling: true });
    let die1new = this.props.sides[Math.floor(Math.random() * 6)];
    let die2new = this.props.sides[Math.floor(Math.random() * 6)];
    this.setState({
      die1: die1new,
      die2: die2new,
    });
    setTimeout(() => {
      this.setState({ isRolling: false });
    }, 1000);
  }
  render() {
    return (
      <div className="RollDice">
        <div className="container">
          <Die face={this.state.die1} rolling={this.state.isRolling} />
          <Die face={this.state.die2} rolling={this.state.isRolling} />
        </div>
        <button onClick={this.rollDie} disabled={this.state.isRolling}>
          {this.state.isRolling ? "Rolling..." : "Roll Dice"}
        </button>
      </div>
    );
  }
}

export default RollDice;
