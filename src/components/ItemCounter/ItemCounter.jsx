import React, { useState } from "react";
import Button from "../Button/Button";
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
    <div>
      <text>Cantidad para agregar: {counter}</text>
      <br />
      <br />
      <Button onClick={handleIncrement} label={"Aumentar"} />
      <Button onClick={handleAdd} label={"Agregar"} />
      <Button onClick={handleDecrement} label={"Disminuir"} />
    </div>
  );
};

export default ItemCounter;
