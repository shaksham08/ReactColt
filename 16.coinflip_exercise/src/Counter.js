import React from "react";

class Counter extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Out of {this.props.total} flips,there has been {this.props.head} head
          and {this.props.tail} tail
        </h1>
      </div>
    );
  }
}

export default Counter;
