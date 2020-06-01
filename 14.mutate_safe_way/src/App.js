import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { num: [] };
    this.addNum = this.addNum.bind(this);
  }

  addNum() {
    const newNum = Math.floor(Math.random() * 50);
    const num = [...this.state.num, newNum];
    this.setState({ num: num });
  }

  render() {
    const list = this.state.num.map((el) => <h1>{el}</h1>);
    return (
      <div className="App">
        <h1>THis is texts</h1>
        {list}

        <button onClick={this.addNum}>CLick</button>
      </div>
    );
  }
}
export default App;
