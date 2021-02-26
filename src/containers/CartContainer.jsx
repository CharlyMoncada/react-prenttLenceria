import React from "react";
import Cart from "../components/Cart/Cart";
import UserForm from "../components/UserForm/UserForm";
import './_cartContainer.scss';

export default function CartContainer() {
  return (
    <div className="cartContainer">
      <UserForm />
      <Cart />
    </div>
  );
}
