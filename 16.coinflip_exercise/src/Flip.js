import React from "react";
import Counter from "./Counter";
import "./Flip.css";

class Flip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      head: 0,
      tail: 0,
      isHead: true,
    };
    this.flipCoin = this.flipCoin.bind(this);
  }
  static defaultProps = {
    images: [
      "https://tinyurl.com/react-coin-heads-jpg",
      "https://tinyurl.com/react-coin-tails-jpg",
    ],
  };

  flipCoin() {
    let idx = Math.floor(Math.random() * 2);
    let prevState = { ...this.state };
    if (idx) {
      prevState.total++;
      prevState.head++;
      prevState.isHead = true;
    } else {
      prevState.total++;
      prevState.tail++;
      prevState.isHead = false;
    }
    this.setState({
      ...prevState,
    });
  }
  render() {
    return (
      <div>
        <h1>Lets Flip a coin</h1>
        <img
          src={this.state.isHead ? this.props.images[0] : this.props.images[1]}
          alt=""
          className="Flip-Image"
        />
        <button onClick={this.flipCoin} className="Flip-Button">
          Toss
        </button>
        <Counter
          total={this.state.total}
          head={this.state.head}
          tail={this.state.tail}
        />
      </div>
    );
  }
}

export default Flip;
