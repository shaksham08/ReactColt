class Machine extends React.Component {
  render() {
    const { x, y, z } = this.props;
    const check = () => {
      if (x == y && x == z) {
        return "WIN";
      } else {
        return "LOOSE";
      }
    };

    return (
      <div>
        <h1>SLOT</h1>
        <p>
          {x}
          {y}
          {z}
        </p>
        <p>{check()}</p>
      </div>
    );
  }
}
