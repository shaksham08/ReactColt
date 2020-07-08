import React from "react";
import { v4 as uuidv4 } from "uuid";

class NewBoxForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: "",
      height: "",
      color: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const newBoxx = { ...this.state, id: uuidv4() };
    this.props.newBox(newBoxx);
    this.setState({
      width: "",
      height: "",
      color: "",
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="width">Width</label>
          <input
            type="text"
            id="width"
            name="width"
            value={this.state.width}
            onChange={this.handleChange}
          />
          <label htmlFor="height">height</label>
          <input
            type="text"
            id="height"
            name="height"
            value={this.state.height}
            onChange={this.handleChange}
          />
          <label htmlFor="color">color</label>
          <input
            type="text"
            id="color"
            name="color"
            value={this.state.color}
            onChange={this.handleChange}
          />
          <button>Submit!!</button>
        </form>
      </div>
    );
  }
}

export default NewBoxForm;
