import React from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

class BoxList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [],
    };
    this.addBoxes = this.addBoxes.bind(this);
    this.removeBoxes = this.removeBoxes.bind(this);
  }

  addBoxes(details) {
    this.setState({
      boxes: [...this.state.boxes, details],
    });
  }

  removeBoxes(id) {
    const newBox = this.state.boxes.filter((box) => box.id !== id);
    this.setState({
      boxes: [...newBox],
    });
  }
  render() {
    const boxes = this.state.boxes.map((box) => (
      <Box
        width={box.width}
        height={box.height}
        color={box.color}
        addNew={this.addBoxes}
        remove={this.removeBoxes}
        key={box.id}
        id={box.id}
      />
    ));
    return (
      <div>
        <NewBoxForm newBox={this.addBoxes} />
        <div>{boxes}</div>
      </div>
    );
  }
}

export default BoxList;
