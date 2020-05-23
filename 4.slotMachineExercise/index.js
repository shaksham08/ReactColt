class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Slot machine exercise</h1>
        <Machine x="X" y="Y" z="Z" />
        <Machine x="X" y="X" z="X" />
        <Machine x="X" y="Y" z="Y" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
