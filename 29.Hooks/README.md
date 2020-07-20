# React Hooks

Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don’t work inside classes — they let you use React without classes.

React provides a few built-in Hooks like useState. You can also create your own Hooks to reuse stateful behavior between different components.

This actually makes components very easy to write and clean.

## 1. State Hook

```jsx
import React, { useState } from "react";

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

We call it inside a function component to add some local state to it. React will preserve this state between re-renders. useState returns a pair: the current state value and a function that lets you update it. You can call this function from an event handler or somewhere else. It’s similar to this.setState in a class, except it doesn’t merge the old and new state together.

The only argument to useState is the initial state. In the example above, it is 0 because our counter starts from zero. Note that unlike this.state, the state here doesn’t have to be an object — although it can be if you want. The initial state argument is only used during the first render.

## 2. Building a Custom Hooks

We can use same concept for changing boolean values as well.

```jsx
import React, { useState } from "react";

export default function Toggler() {
  const [isHappy, setIsHappy] = useState(true);
  const [isDog, setIsDog] = useState(true);
  const handleIsHappy = () => {
    setIsHappy(!isHappy);
  };
  const handleIsDog = () => {
    setIsDog(!isDog);
  };
  return (
    <div>
      <h1>This is Toggler componenet</h1>
      <p>CLick on emoji to change</p>
      <h1 onClick={handleIsHappy}>{isHappy ? "🙂" : "😢"} </h1>
      <h1 onClick={handleIsDog}>{isDog ? "🐕 " : "🐈 "} </h1>
    </div>
  );
}
```

But here we can notice that we have duplicate functions.

These are repetative logic. So to avoid this we can create our own hook **useToggle** that will use **useState** inside of it.

useToggle.js

```jsx
import { useState } from "react";

function useToggle(initalVal = false) {
  //callpiece of state
  const [state, setstate] = useState(initalVal);
  const toggle = () => {
    setstate(!state);
  };
  return [state, toggle];
}

export default useToggle;
```

Toggle.js

```jsx
import React from "react";
import useToggle from "./hooks/useToogle";

export default function Toggler() {
  const [isHappy, toggleIsHappy] = useToggle(true);
  const [isDog, toggleIsDog] = useToggle(true);

  return (
    <div>
      <h1>This is Toggler componenet</h1>
      <p>CLick on emoji to change</p>
      <h1 onClick={toggleIsHappy}>{isHappy ? "🙂" : "😢"} </h1>
      <h1 onClick={toggleIsDog}>{isDog ? "🐕 " : "🐈 "} </h1>
    </div>
  );
}
```

This makes very easy and let us make use of reusuable codes.

## 3. Building Form using hooks

Here we will be making a custom hooks which can be used for any input

```jsx
import { useState } from "react";

function useInputStateHook(initialVal = "") {
  const [state, setstate] = useState(initialVal);
  const change = (e) => {
    e.preventDefault();
    setstate(e.target.value);
  };
  const reset = (e) => {
    e.preventDefault();
    setstate("");
  };

  return [state, change, reset];
}
export default useInputStateHook;
```

```jsx
import React from "react";
import useInputStateHook from "./hooks/useFormState";

export default function SimpleFormHooks() {
  const [email, setEmail, reset] = useInputStateHook("");
  return (
    <div>
      <form>
        <h1>The value is :{email} </h1>
        <input value={email} onChange={setEmail} type="text" />
        <button onClick={reset}>Reset!!</button>
      </form>
    </div>
  );
}
```

## 4. useEffect Hook

we can think of **useEffect Hook** as **componentDidMount, componentDidUpdate, and componentWillUnmount** combined which is React class lifecycle methods

In React class components, the render method itself shouldn’t cause side effects. It would be too early — we typically want to perform our effects after React has updated the DOM.

This is why in React classes, we put **side effects** into **componentDidMount** and **componentDidUpdate**.

```jsx
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }
  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
```

Note how we have to duplicate the code between these two lifecycle methods in class.

This is because in many cases we want to perform the same side effect regardless of whether the component just mounted, or if it has been updated. Conceptually, we want it to happen after every render — but React class components don’t have a method like this. We could extract a separate method but we would still have to call it in two places.

### Now Example Using Hooks

```jsx
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
```

**What does useEffect do?** By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.

**Why is useEffect called inside a component?** Placing useEffect inside the component lets us access the count state variable (or any props) right from the effect. We don’t need a special API to read it — it’s already in the function scope. Hooks embrace JavaScript closures and avoid introducing React-specific APIs where JavaScript already provides a solution.

**Does useEffect run after every render?** Yes! By default, it runs both after the first render and after every update.Instead of thinking in terms of “mounting” and “updating”, you might find it easier to think that effects happen “after render”. React guarantees the DOM has been updated by the time it runs the effects.

Using UseEffect to fetch movie data

```jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

function SWMovies() {
  const [number, setNumber] = useState(1);
  const [movie, setMovie] = useState("");

  useEffect(() => {
    async function getData() {
      const response = await axios.get(`https://swapi.co/api/films/${number}/`);
      setMovie(response.data);
    }
    getData();
  }, [number]);

  return (
    <div>
      <h1>Pick A Movie</h1>
      <h4>Movie title : {movie.title}</h4>
      <p>para : {movie.opening_crawl}</p>
      <select value={number} onChange={(e) => setNumber(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
      </select>
    </div>
  );
}
export default SWMovies;
```

Here [number] is passed so that useEffect will only work on change of number state but not with movie state.
