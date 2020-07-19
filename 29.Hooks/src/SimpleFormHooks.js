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
