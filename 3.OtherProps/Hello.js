//*Props are immutable

class Hello extends React.Component {
  render() {
    let bangs = "!".repeat(this.props.bangs);
    return (
      <div>
        <h1>
          From {this.props.from} to {this.props.to} {bangs}
        </h1>

        <img src={this.props.image} alt="" />
      </div>
    );
  }
}
