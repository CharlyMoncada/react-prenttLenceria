import React, { useState } from "react";
import { Card } from "react-bootstrap";
import ItemCounter from "../ItemCounter/ItemCounter";
import useCartContext from "../../contexts/CartContext";

const ItemDetail = ({ product }) => {
  const [counter, setCounter] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const { addItem } = useCartContext();

  const hanldeCounter = (counter) => {
    setCounter(counter);
  };

  return (
    <div className="itemDetailCont">
      <Card
        className="text-center"
        bg="secondary"
        text="white"
        style={{ minHeight: "90vh" }}
      >
        <Card.Header>Detalles del Producto</Card.Header>
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text> {product.brand}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-white">
          {product.stock} en Stock!
        </Card.Footer>
      </Card>

      <div>
        <ItemCounter initial={1} max={5} onAdd={hanldeCounter} />
      </div>

      <br></br>
      <button onClick={addItem(product, quantity)}>
        Agregar {quantity} items al carrito
      </button>
    </div>
  );
};

export default ItemDetail;
