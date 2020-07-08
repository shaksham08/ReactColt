import React from "react";

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.remove(this.props.id);
  }
  render() {
    return (
      <div>
        <div
          style={{
            width: `${this.props.width}em`,
            height: `${this.props.height}em`,
            backgroundColor: this.props.color,
          }}
        ></div>
        <button onClick={this.handleClick}>X</button>
      </div>
    );
  }
}

export default Box;
