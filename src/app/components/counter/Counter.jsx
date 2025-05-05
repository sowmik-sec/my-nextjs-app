"use client";
import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)} className="border-2 p-2">
        Increase
      </button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter - 1)} className="border-2 p-2">
        Decrease
      </button>
    </div>
  );
}

export default Counter;
