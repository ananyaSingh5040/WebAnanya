import React from "react";
import { useState } from "react";
import "./Counter.css";
const Counter = () => {
  const [state, setState] = useState(0);
  return (
    <>
      <div className="container-card">
        <p className="para">You clicked {state} times</p>
        <button className="btn-primary" onClick={() => {setState(state+1)}}>
          Click me
        </button>
      </div>
    </>
  );
};
export default Counter;
