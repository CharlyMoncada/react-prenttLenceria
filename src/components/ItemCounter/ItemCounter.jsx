import React, { useState } from "react";
import "./_itemCounter.scss";

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
      <button className='btn-counter' onClick={handleIncrement}>Increment</button>
      <button className='btn-counter' onClick={handleAdd}>Add</button>
      <button className='btn-counter' onClick={handleDecrement}>Decrement</button>
    </article>
  );
};

export default ItemCounter;
