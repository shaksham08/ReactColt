import { useState } from "react";

function useToggle(initalVal = false, value) {
  //callpiece of state
  const [state, setstate] = useState(initalVal);
  const toggle = () => {
    setstate(!state);
  };
  return [state, toggle];
}

export default useToggle;
