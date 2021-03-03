import React, { useState } from "react";
import ItemCounter from "../ItemCounter/ItemCounter";
import useCartContext from "../../contexts/CartContext";
import Button from "../Button/Button";
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
              <th>Marca</th>
              <th>Producto</th>
              <th>Precio</th>
              <th>Stock</th>
            </tr>
            <tr>
              <th>{product.brand}</th>
              <th>{product.name}</th>
              <th>{product.price}</th>
              <th>{product.stock}</th>
            </tr>
          </table>
          <br />
          <img
            className="imageDetail"
            id={product.id}
            src={product.route}
            alt={product.name}
          />
          <br />
          <div>
            <ItemCounter
              initial={1}
              max={product.stock}
              onAdd={handleCounter}
            />
          </div>
          <br />
          {quantity > 0 && (
            <div>
              <Button
                onClick={() => addItem(product, quantity)}
                label={"Agregar " + quantity + " productos al carrito"}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
