import React from "react";
import "./App.css";
import Lottery from "./Lottery";

function App() {
  return (
    <div className="App">
      <h1>Testing</h1>
      <Lottery maxNum={100} numBalls={10} title="MEGA" />
      <Lottery maxNum={20} numBalls={4} title="MINI" />
    </div>
  );
}

export default App;
