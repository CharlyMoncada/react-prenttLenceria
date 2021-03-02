import React from "react";
import "./_cart.scss";

const Cart = ({ items, comprar, deleteItems }) => {
  console.log(items);
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

      {/* <br></br>
      <button className="btn-counter" onClick={comprar}>
        Comprar
      </button>
      <button className="btn-counter" onClick={deleteItems}>
        Limpiar
      </button>
      <br></br> */}
    </div>
  );
};

export default Cart;
