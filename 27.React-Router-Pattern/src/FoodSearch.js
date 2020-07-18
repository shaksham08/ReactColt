import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class FoodSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    alert("Saving to databse");

    this.props.history.push(`/food/${this.state.food}`);
  }
  handleChange(e) {
    this.setState({
      food: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <h1>Search For a Food</h1>

        <label htmlFor="food">Food Name</label>
        <input
          onChange={this.handleChange}
          type="text"
          name="food"
          id="food"
          placeholder="Search For Food"
          value={this.state.food}
        />
        <Link to={`/food/${this.state.food}`}>CLick</Link>
        <button onClick={this.handleClick}>Save New Food</button>
      </div>
    );
  }
}
