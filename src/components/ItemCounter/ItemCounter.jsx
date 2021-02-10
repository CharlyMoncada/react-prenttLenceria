import React, { useState } from "react";

const ItemCounter = ({ initial, max, onAdd }) => {
  const [counter, setCounter] = useState(1);

  const hanldeDecrement = () => {
    setCounter(counter - 1);
  };

  const hanldeIncrmeent = () => {
    setCounter(counter - 1);
  };

  const hanldeAdd = () => {
    onAdd(counter);
  };

  return (<article>
      {counter}
      <button onClick={hanldeDecrement}>Decrement</button>
      <button></button>
      <button></button>
  </article>);
};

export default ItemCounter;
