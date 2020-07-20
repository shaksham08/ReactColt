import React from "react";
import CounterHooks from "./CounterHooks";
import SimpleFormHooks from "./SimpleFormHooks";
import Toggler from "./Toggler";
import SWMovies from "./SWMovies";
import "./App.css";
import Clicker from "./Clicker";

function App() {
  return (
    <div className="App">
      <CounterHooks />
      <Toggler />
      <SimpleFormHooks />
      <Clicker />
      <SWMovies />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
