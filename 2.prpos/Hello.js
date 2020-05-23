//*Props are immutable

class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1>
          From {this.props.from} to {this.props.to}
        </h1>
      </div>
    );
  }
}
