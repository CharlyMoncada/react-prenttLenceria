import React from "react";

export default function Item({ item }) {
  return (
    <div class="grid-gallery__item">
      <p class="grid-gallery__text">Modelo ${item.name}</p>
      <img
        class="grid-gallery__image"
        id={item.id}
        src={item.route}
        alt={item.name}

      />
      <input
        type="image"
        class="grid-gallery__star"
        src="./images/icons/add_shopping_cart.ico"
        // onclick="agregarAlCarritoDeCompras(${item[i].id});"
      />
    </div>
  );
}
