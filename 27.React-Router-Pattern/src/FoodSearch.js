import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class FoodSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      food: e.target.value,
    });
  }

  handleSubmit(e) {}
  render() {
    return (
      <div>
        <h1>Search For a Food</h1>
        <form action="">
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
        </form>
      </div>
    );
  }
}
