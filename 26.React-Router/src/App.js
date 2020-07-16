import React from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import Dog from "./Dog";
import Cat from "./Cat";
import Monkey from "./Monkey";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav className="App-nav">
        <NavLink exact activeClassName="active-link" to="/">
          monkey
        </NavLink>
        <NavLink exact activeClassName="active-link" to="/dog">
          Dog
        </NavLink>
        <NavLink exact activeClassName="active-link" to="/cat">
          Cat
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/" component={Monkey} />
        <Route exact path="/dog" component={() => <Dog name="tommy" />} />
        <Route exact path="/cat" component={Cat} />
      </Switch>
    </div>
  );
}

export default App;
