"use client";

import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <div>카운터: {counter}</div>
      <div>
        <button onClick={() => setCounter((prev) => prev + 1)}>+1</button>
        <button onClick={() => setCounter((prev) => prev - 1)}>-1</button>
        <button onClick={() => setCounter(0)}>reset</button>
      </div>
    </div>
  );
}
