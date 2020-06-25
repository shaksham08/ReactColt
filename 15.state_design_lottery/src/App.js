import React from "react";
import "./App.css";
import Lottery from "./Lottery";

function App() {
  return (
    <div className="App">
      <Lottery maxNum={50} title="BIG" numBalls={6} />
      <Lottery maxNum={100} title="MEGA" numBalls={10} />
      <Lottery maxNum={20} title="MINI" numBalls={4} />
    </div>
  );
}

export default App;
