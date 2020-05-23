class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello there!</h1>
        <h1>Hello there!</h1>
        <h1>Hello there!</h1>
        <Hello from="shaksham" to="apple" />
        <Hello from="Martin" to="Qwer" />
        <Hello from="Power" to="dkjfsd" />
        <Hello from="Learn" to="apply" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

//for passing number we use {} and for strings we use "" for passing props
