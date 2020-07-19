It’s conventional for the top-level component to be named App.

This renders the other components:

```jsx
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Greetings!</h1>
        <Hello/>
        <Goodbye/>
      </div>
    );
  }
}
```

These components can even be reused
