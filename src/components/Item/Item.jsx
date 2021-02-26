import React from "react";
import { Link } from "react-router-dom";

export default function Item({ item }) {
  
  return (
    <div class="grid-gallery__item">
      <Link to={{ pathname: "/item/" + item.id }} key={item.id}>
        <p className="grid-gallery__text">Modelo ${item.name}</p>
        <img
          className="grid-gallery__image"
          id={item.id}
          src={item.route}
          alt={item.name}
        />
      </Link>
    </div>
  );
}
