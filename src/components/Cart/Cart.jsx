import React from "react";
import "./_cart.scss";

const Cart = ({ items }) => {
  return (
    <div className="cart">
      <table className="itemDetailTable">
        <tr>
          <th>Marca</th>
          <th>Modelo</th>
          <th>Precio</th>
          <th>Cantidad</th>
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
    </div>
  );
};

export default Cart;
