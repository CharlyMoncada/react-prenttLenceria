import React, { useState } from "react";

const ItemCounter = ({ initial, max, onAdd }) => {
  const [counter, setCounter] = useState(initial);

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const handleIncrement = () => {
    if (counter < max) {
      setCounter(counter + 1);
    }
  };

  const handleAdd = () => {
    onAdd(counter);
  };

  return (
    <article>
      {counter}
      <br />
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleDecrement}>Decrement</button>
    </article>
  );
};

export default ItemCounter;
