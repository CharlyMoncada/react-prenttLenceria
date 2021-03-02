import React from "react";
import Cart from "../components/Cart/Cart";
import UserForm from "../components/UserForm/UserForm";
import useCartContext from "../contexts/CartContext";
import "./_cartContainer.scss";

export default function CartContainer() {
  const { items, deleteItems } = useCartContext();

  const comprar = () => {
      alert("Productos comprados");

      let order ={
        name: document.getElementById("nombre").value = "",
        lastName: document.getElementById("apellido").value = "",
        email: document.getElementById("email").value = "",
        message: document.getElementById("mensaje").value = "",
        items: items
      }

      console.log(order);
      deleteAll();
  };

  const deleteAll = () => {
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mensaje").value = "";
    deleteItems();
  };

  return (
    <section>
      <div className="cartContainer">
        <div className="userForm">
          <div>
            <p>Completar formulario de facturacion</p>
          </div>
          <div class="form__inputBox">
            <input
              type="text"
              name="nombre"
              id="nombre"
              placeholder="Nombre"
              required
            />
          </div>
          <div class="form__inputBox">
            <input
              type="text"
              name="apellido"
              id="apellido"
              placeholder="Apellido"
              required
            />
          </div>
          <div class="form__inputBox">
            <input
              type="email"
              name="nombre"
              id="email"
              placeholder="Email de Contacto"
              required
            />
          </div>

          <div>
            <textarea
              name="mensaje"
              id="mensaje"
              placeholder="Motivo de consulta"
              cols="20"
              rows="5"
            ></textarea>
          </div>
        </div>

        <Cart items={items} />
        <br></br>
        <button className="btn-counter" onClick={comprar}>
          Comprar
        </button>
        <button className="btn-counter" onClick={deleteAll}>
          Limpiar Carrito
        </button>
        <br></br>
      </div>
    </section>
  );
}
