import React from "react";

class Random extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    this.clickfunction = this.clickfunction.bind(this);
  }

  clickfunction(e) {
    let randomNumber = Math.floor(Math.random() * 10);
    this.setState({
      value: randomNumber,
    });
  }

  check() {
    if (this.state.value === 7) {
      return <h1>YOU WON</h1>;
    } else {
      return <button onClick={this.clickfunction}>Cick here</button>;
    }
  }
  render() {
    return (
      <div>
        <h1>The number is {this.state.value}</h1>
        {this.check()}
      </div>
    );
  }
}

export default Random;
