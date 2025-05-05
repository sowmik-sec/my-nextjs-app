"use client";
import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button
        onClick={() => setCounter(counter + 1)}
        className="btn btn-accent"
      >
        Increase
      </button>
      <h1>{counter}</h1>
      <button
        onClick={() => setCounter(counter - 1)}
        className="btn btn-secondary"
      >
        Decrease
      </button>
    </div>
  );
}

export default Counter;
