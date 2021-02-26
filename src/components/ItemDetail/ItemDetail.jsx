import React, { useState, useEffect } from "react";
import ItemCounter from "../ItemCounter/ItemCounter";
import useCartContext from "../../contexts/CartContext";
import "./_itemDetail.scss";

const ItemDetail = ({ product }) => {
  const [counter, setCounter] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const { addItem } = useCartContext();

  const handleCounter = (counter) => {
    setCounter(counter);
    setQuantity(counter);
  };

  return (
    <div>
      {product && (
        <div>
          <table className="itemDetailTable">
            <tr>
              <th>Brand</th>
              <th>Name</th>
              <th>Price</th>
              <th>Stock</th>
            </tr>
            <tr>
              <th>{product.brand}</th>
              <th>{product.name}</th>
              <th>{product.price}</th>
              <th>{product.stock}</th>
            </tr>
          </table>

          <img id={product.id} src={product.route} alt={product.name} />
          <br />
          <div>
            <ItemCounter
              initial={1}
              max={product.stock}
              onAdd={handleCounter}
            />
          </div>

          <br />
          <div>
            <button onClick={() => addItem(product, quantity)}>
              Agregar {quantity} items al carrito
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
