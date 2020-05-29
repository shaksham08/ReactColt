class Hello extends React.Component {
  render() {
    const msgs = [
      { id: 1, text: "Greetings!" },
      { id: 2, text: "Goodbye!" },
    ];

    return (
      <ul>
        {msgs.map((m) => (
          <li>{m.text}</li>
        ))}
      </ul>
    );
  }
}

ReactDOM.render(<Hello />, document.getElementById("root"));
