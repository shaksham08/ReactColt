# Router Patterns (URL PARAMS)

## 1. **Working with Single URL Params**

```javascript
"/food/:name";
```

Here **name** is a **URL parameter** using the **colon(:)**

All the different Route methods are passed with three same route props:

1. History
2. Location
3. Match

```jsx
<div className="App">
  <Switch>
    <Route
      exact
      path="/food/:name"
      render={(routerParams) => <Food name="egg" stuff={routerParams} />}
    />
  </Switch>
</div>
```

Here if we go and see what is stored in stuff then we will see that its an Object with three items i.e the route props

1. History
2. Location
3. Match

On going to Match from React Dev Tool We can find the params,url and path

![A test image](https://github.com/shaksham08/ReactColt/blob/master/27.React-Router-Pattern/utilities/params.PNG)

So we can use the Params value as Props also.

```jsx
<div className="App">
  <Switch>
    <Route
      exact
      path="/food/:name"
      render={(routerParams) => <Food name={routerParams.match.params.name} />}
    />
  </Switch>
</div>
```

So using this we can now Pass the URL param value to the components

Note: We can also pass the Route Params as three separate Params

```jsx
<div className="App">
  <Switch>
    <Route
      exact
      path="/food/:name"
      render={(routerParams) => <Food {...routerParams} />}
    />
  </Switch>
</div>
```

```jsx
export default class Food extends Component {
  render() {
    const name = this.props.match.params.name;
    const url = `https://source.unsplash.com/1600x900/?${name}`;
    return (
      <div className="Food">
        <h1>I love to eat {name}</h1>
        <img src={url} alt={name} />
      </div>
    );
  }
}
```

Note: if we are rendering the component using component then react router will automatically pass all the router params as props

```jsx
<div className="App">
  <Switch>
    <Route exact path="/food/:name" component={Food} />
  </Switch>
</div>
```

## 2. **Working with Multiple Route Params**

```jsx
<div className="App">
  <Switch>
    <Route exact path="/food/:name" component={Food} />
    <Route exact path="/food/:foodname/drink/:drinkname" component={Meal} />
  </Switch>
</div>
```

## 3. Adding a 404 Not Found Route

```jsx
<div>
  <Switch>
    <Route exact path="/food/:name" component={Food} />
    <Route exact path="/food/:foodname/drink/:drinkname" component={Meal} />
    <Route exact render={() => <h1>Page Not FOund</h1>} />
  </Switch>
</div>
```
