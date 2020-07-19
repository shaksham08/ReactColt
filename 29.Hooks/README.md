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
