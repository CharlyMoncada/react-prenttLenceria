import React from "react";
import useCartContext from "../../contexts/CartContext";
import "./_cart.scss";

const Cart = () => {
  const { items, deleteItems } = useCartContext();
  console.log(items);
  console.log(items[0]);

  return (
    <div className="cart">
      <table className="itemDetailTable">
        <tr>
          <th>Brand</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
        {items &&
          items.map((item) => {
            return (
              <tr>
                <th>{item.item.brand}</th>
                <th>{item.item.name}</th>
                <th>{item.item.price}</th>
                <th>{item.quantity}</th>
              </tr>
            );
          })}
      </table>

      <br></br>
      <button>Comprar</button>
      <button onClick={deleteItems}>Limpiar</button>
      <br></br>
    </div>
  );
};

export default Cart;
