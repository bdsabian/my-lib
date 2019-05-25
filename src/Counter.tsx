import * as React from "react";
import { useState } from "react";

interface CounterProps {
  initialCount?: number;
}

const Counter = ({ initialCount = 0 }: CounterProps) => {
  const [count, setCount] = useState(initialCount);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
