import React, { useState } from 'react';

const Counter: React.FC = () => {
  // Declare the state variable `count` of type number
  const [count, setCount] = useState<number>(0);

  // Function to increment the count
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Function to decrement the count
  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;