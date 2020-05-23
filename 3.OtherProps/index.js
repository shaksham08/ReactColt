class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello there!</h1>
        <h1>Hello there!</h1>
        <h1>Hello there!</h1>
        <Hello
          from="shaksham"
          to="apple"
          num={3}
          data={[1, 2, 3, 4, 5]}
          isFunny={true}
          bangs={4}
          image="https://images.unsplash.com/photo-1587613756197-11742e6b42ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
        />

        <Hello
          from="shaksham"
          to="apple"
          num={3}
          data={[1, 2, 3, 4, 5]}
          isFunny={true}
          bangs={10}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

//for passing number we use {} and for strings we use "" for passing props
