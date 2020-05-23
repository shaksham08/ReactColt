class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello there!</h1>
        <h1>Hello there!</h1>
        <h1>Hello there!</h1>
        <Hello />
        <Hello />
        <Hello />
        <Hello />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
