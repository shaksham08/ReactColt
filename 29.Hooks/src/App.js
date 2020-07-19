import React from "react";
import CounterHooks from "./CounterHooks";
import SimpleFormHooks from "./SimpleFormHooks";
import Toggler from "./Toggler";
import "./App.css";

function App() {
  return (
    <div className="App">
      <CounterHooks />
      <Toggler />
      <SimpleFormHooks />
    </div>
  );
}

export default App;
