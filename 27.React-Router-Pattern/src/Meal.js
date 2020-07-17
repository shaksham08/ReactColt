import React, { Component } from "react";
import "./Meal.css";

export default class Meal extends Component {
  render() {
    const foodname = this.props.match.params.foodname;
    const drinkname = this.props.match.params.drinkname;
    return (
      <div className="Meal">
        <h1>This is a meal</h1>
        <img
          src={`https://source.unsplash.com/1600x900/?${foodname}`}
          alt={foodname}
        />
        <img
          src={`https://source.unsplash.com/1600x900/?${drinkname}`}
          alt={drinkname}
        />
      </div>
    );
  }
}
