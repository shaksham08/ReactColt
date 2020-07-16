# React Router

There are two types of routing

1. Server side roting
2. Client Side routing

Using React router we can achieve the client side routing very easily

Install the module using below npm command :

```javascript
npm i react-router-dom
```

Now import this in **index.js** file and wrap App component in **BroswerRouter** Component

```javascript
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
```

Now to create the route

```jsx
import { Route, Switch } from "react-router-dom";
<Route path="/" component={Monkey} />
<Route path="/dog" component={Dog} />
<Route path="/cat" component={Cat} />
```

But the problem with this is that the matching of router happens inclusive i.e if we are going to route **"/dog"** then it will first search for route starting with **"/"** and match it then go for next

So to solve this we can use **Switch**, it makes sure that only one of the route matches **(whichever path matches first)**

```javascript
<Switch>
  <Route path="/" component={Monkey} />
  <Route path="/dog" component={Dog} />
  <Route path="/cat" component={Cat} />
</Switch>
```

But this will also not solve our prolem here as it will always render the **"/"** route as it matches first

One solution can be altering the position of the router as it matches

```javascript
<Switch>
  <Route path="/dog" component={Dog} />
  <Route path="/cat" component={Cat} />
  <Route path="/" component={Monkey} />
</Switch>
```

But what if we dont want to order as it will be tedious work so we can also pass other property called **exact**

```javascript
<Switch>
  <Route exact path="/" component={Monkey} />
  <Route exact path="/dog" component={Dog} />
  <Route exact path="/cat" component={Cat} />
</Switch>
```

We can create a nav bar to go to different routes

```javascript
<div className="App">
  <nav className="App-nav">
    <a href="/">monkey</a>
    <a href="/dog">Dog</a>
    <a href="/cat">Cat</a>
  </nav>
  <Switch>
    <Route exact path="/" component={Monkey} />
    <Route exact path="/dog" component={Dog} />
    <Route exact path="/cat" component={Cat} />
  </Switch>
</div>
```

But the problem with this again is that it send post get request to get the route which indeed reloads the page which we dont want.

So instead of anchor tag we are going to use **Link** tag which does client side routing instead of sending get request

```javascript
<div className="App">
  <nav className="App-nav">
    <Link to="/">monkey</Link>
    <Link to="/dog">Dog</Link>
    <Link to="/cat">Cat</Link>
  </nav>
  <Switch>
    <Route exact path="/" component={Monkey} />
    <Route exact path="/dog" component={Dog} />
    <Route exact path="/cat" component={Cat} />
  </Switch>
</div>
```

We can also use **NavLink** instead of **Link** as we get a css class of active which let us know on which route we are

```javascript
import { Route, Switch, NavLink } from "react-router-dom";
<div className="App">
  <nav className="App-nav">
    <NavLink exact activeClassName="active-link" to="/">
      monkey
    </NavLink>
    <NavLink exact activeClassName="active-link" to="/dog">
      Dog
    </NavLink>
    <NavLink exact activeClassName="active-link" to="/cat">
      Cat
    </NavLink>
  </nav>
  <Switch>
    <Route exact path="/" component={Monkey} />
    <Route exact path="/dog" component={Dog} />
    <Route exact path="/cat" component={Cat} />
  </Switch>
</div>;
```

Now there are two ways to route the path

1. component
2. render

For example we need to pass a prop then we can pass it using a callback for component way

```
<Route exact path="/dog" component={() => <Dog name="tommy" />} />
```

Using render method:

```
<Route exact path="/dog" render={() => <Dog name="tommy" />} />
```

Note:- When we use component then it will make new component everytime we go to that route but when we use render it create the component once and re-render it again.

They look same but they are different.

Both are used in applications, but we can use components when we are not passing props and when we are passing props then render can be used.

Mostly the use depends on what we are making, i.e some time we want to use Reactlifecycle methods then render can be used as we want to mount the component only once in many cases
