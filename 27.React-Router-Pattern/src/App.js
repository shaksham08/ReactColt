import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Food from "./Food";
import Meal from "./Meal";
import FoodSearch from "./FoodSearch";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/food/:name" component={Food} />
        <Route exact path="/food/:foodname/drink/:drinkname" component={Meal} />
        <Route
          exact
          path="/"
          render={(reouteProps) => <FoodSearch {...reouteProps} />}
        />
        <Route exact render={() => <h1>Page Not FOund</h1>} />
      </Switch>
    </div>
  );
}

export default App;
