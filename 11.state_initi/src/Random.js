import React from "react";

class Random extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 123,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  static defaultProps = {
    name: "default",
  };

  handleClick() {
    this.setState({ num: 789456 });
  }

  render() {
    return (
      <div>
        <h1>This is props and called by : {this.props.name}</h1>
        <h1>This is state and value is : {this.state.num}</h1>
        <button onClick={this.handleClick}>CLick me</button>
      </div>
    );
  }
}

export default Random;
