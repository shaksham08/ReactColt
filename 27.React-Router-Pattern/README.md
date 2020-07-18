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

## 4. Adding Form To search

```jsx
<form action="">
  <label htmlFor="food">Food Name</label>
  <input
    onChange={this.handleChange}
    type="text"
    name="food"
    id="food"
    placeholder="Search For Food"
    value={this.state.food}
  />
  <Link to={`/food/${this.state.food}`}>CLick</Link>
</form>
```

## 5. Redirect

Here we are redirecting the user if he enters a number in the form

```jsx
<div className="Food">
  {/\d/.test(name) ? (
    <Redirect to="/" />
  ) : (
    <div>
      <h1>I love to eat : {name}</h1>
      <img src={url} alt={name} />
    </div>
  )}
</div>
```

But this is not the best way to redirect someone to certain page without any message. So we can add some message with this also.

This **Redirect** is one way to redirect somebody.

## 6. History Prop

THis is another manual way to redirect somebody to history pages.

With Redirect we cannot make something like if we click on a button then something is being saved to database or calling an API and the redirect.

THis can be achieved with history Prop .i.e whatever we push onto the history prop the browser will redirect to that link.

With this basically we are doing many things before redirecting i.e changing state, saving to database etc.

Below is the Form code where we are taking input and a button which calls handle Click method

```jsx
<div>
  <h1>Search For a Food</h1>

  <label htmlFor="food">Food Name</label>
  <input
    onChange={this.handleChange}
    type="text"
    name="food"
    id="food"
    placeholder="Search For Food"
    value={this.state.food}
  />
  <Link to={`/food/${this.state.food}`}>CLick</Link>
  <button onClick={this.handleClick}>Save New Food</button>
</div>
```

Below is the handle Click method:

```javascript
handleClick(e) {
  alert("Saving to databse");
  this.props.history.push(`/food/${this.state.food}`);
}
```

Note: Make sure to pass the route props as well

```jsx
<Route
  exact
  path="/"
  render={(reouteProps) => <FoodSearch {...reouteProps} />}
/>
```

## Difference beteeen Redirect and History Prop

When we use history and redirect user to **"/notfound"** containing any number in it so it takes us to error not found page.

For example if we search for **"7UP"** in the **Food Search**, but considering our page it will redirect us to the Page not found.

But if we click back button then again it will go to that food not found page i.e to **"7UP"** search and then again to Page not found.

**So to avoid this whenever we want to send user to avoid going further then we should use Redirect**

## 7. Issue with ROuter with Higher Order Component

Specially when we are trying to push from a component which is not assiciated with a Route then it has not access to the router params.

For example if we add a navnbar component in App.js

```jsx
<div className="App">
  <Navbar />
  <Switch>
    <Route exact path="/food/:name" component={Food} />
    <Route exact path="/food/:foodname/drink/:drinkname" component={Meal} />
    <Route
      exact
      path="/"
      render={(reouteProps) => <FoodSearch {...reouteProps} />}
    />
    <Route exact render={() => <h1>Page Not FOund</h1>} />
  </Switch>
</div>
```

**Navbar.js**

```jsx
import React, { Component } from "react";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert("Looged in ");
    this.props.history.push("/food/fish");
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Login</button>
      </div>
    );
  }
}
```

But we will notice that we dont have access to history prop here as we are not passing the route props to this component since its not associated with **Route**

So to solve this by importing **withROuter** and pass **Navbar** in this.

```jsx
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  handleClick() {
    alert("Looged in ");
    this.props.history.push("/food/fish");
  }

  handleBack() {
    this.props.history.goBack();
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Login</button>
        <button onClick={this.handleBack}>Back</button>
      </div>
    );
  }
}

export default withRouter(Navbar);
```

Now with this it has the complete idea of the Router Props.
