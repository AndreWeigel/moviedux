import React, { useState, useEffect } from 'react';
import '../styles.css';

export default function Counter() {
  const [count, setCount] = useState(0);  // count = state variable, 0 = initial value

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
