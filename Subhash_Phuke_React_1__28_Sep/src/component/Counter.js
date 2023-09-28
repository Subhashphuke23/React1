import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [showResetButton, setShowResetButton] = useState(false);

  const resetCounter = () => {
    setCount(0);
    setShowResetButton(false);
  };

  const increment = () => {
    const updatedCount = count + 1;
    setCount(updatedCount);

    if (updatedCount > 10) {
      setShowResetButton(true);
    } else {
      setShowResetButton(false);
    }
  };

  const decrement = () => {
    if (count > 0) {
      const updatedCount = count - 1;
      setCount(updatedCount);

      if (updatedCount <= 10) {
        setShowResetButton(false);
      }
    } else {
      alert("Count cannot go below 0!");
    }
  };

  useEffect(() => {
    console.log(`Count is now: ${count}`);
  }, [count]);

  return (
    <div>
      <h1>Counter using React</h1>
      <h3 className="underline"> Your Current Count is : {count}</h3>
      <button onClick={increment} className='increment'>Increment</button>
      <button onClick={decrement} className='decrement'>Decrement</button>
      {showResetButton && (
        <button onClick={resetCounter} className='reset'>Go Back To 0</button>
      )}
    </div>
  );
}

export default Counter;

