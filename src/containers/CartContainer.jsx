import React from "react";
import Cart from "../components/Cart/Cart";
import Button from "../components/Button/Button";
import UserForm from "../components/UserForm/UserForm";
import useCartContext from "../contexts/CartContext";
import { getFirestore } from "../firebase/index";
import "./_cartContainer.scss";

export default function CartContainer() {
  const { items, deleteItems } = useCartContext();

  const comprar = () => {
    if (
      document.getElementById("nombre").value !== "" &&
      document.getElementById("apellido").value !== "" &&
      document.getElementById("email").value !== "" &&
      items[0] != null
    ) {
      alert("Productos comprados");
      let order = {
        name: document.getElementById("nombre").value,
        lastName: document.getElementById("apellido").value,
        email: document.getElementById("email").value,
        message: document.getElementById("mensaje").value,
        items: items,
      };

      let db = getFirestore();
      createOrder(db, order);
      updateStock(db);
      deleteAll();
    } else {
      alert("Completar carrito");
    }
  };

  const deleteAll = () => {
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mensaje").value = "";
    deleteItems();
  };

  const createOrder = (db, order) => {
    db.collection("orders")
      .add(order)
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  const updateStock = (db) => {
    items.forEach((element) => {
      console.log(element);
      console.log(element.item.id);
      db.collection("products")
        .doc(element.item.id)
        .update({
          stock: element.item.stock - element.quantity,
        })
        .then((docRef) => {
          console.log("Document updated with ID: ", docRef.id);
        })
        .catch((error) => {
          console.error("Error updated document: ", error);
        });
    });
  };

  return (
    <section>
      {items && items[0] != null && (
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
                placeholder="Comentarios Extras"
                cols="20"
                rows="5"
              ></textarea>
            </div>
          </div>

          <Cart items={items} />
          <Button onClick={deleteAll} label={"Limpiar Carrito"} />
          <Button onClick={comprar} label={"Comprar"} />
        </div>
      )}
    </section>
  );
}
