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
