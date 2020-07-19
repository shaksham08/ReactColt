import React, { useState } from "react";

export default function CounterHooks() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>This is a counter Hook</h1>
      <p>{counter}</p>
      <br />
      <button onClick={() => setCounter(counter + 1)}>Click</button>
    </div>
  );
}
