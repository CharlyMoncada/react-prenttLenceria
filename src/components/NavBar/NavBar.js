import React from "react";

export const NavBar = () => {
  return (
    <nav className="navBar">
      <ul>
        <li>
          <a href="index.html">Home</a>
        </li>
        <li>
          <a href="catalogo.html">Catalogo</a>
        </li>
        <li>
          <a href="carrito.html">Carrito</a>
        </li>
        <li>
          <a href="preguntasFrecuentes.html">Preguntas Frecuentes</a>
        </li>
        <li>
          <a href="envio.html">Envio</a>
        </li>
        <li>
          <a href="contacto.html">Contacto</a>
        </li>
      </ul>
    </nav>
  );
};
