import React from "react";
import { Link } from "react-router-dom";

export const CartWigdet = () => {
  return (
    <Link to="/carrito">
      <img id="1" src="/images/icons/cart.ico" alt="Cart" />
    </Link>
  );
};
