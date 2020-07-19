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
