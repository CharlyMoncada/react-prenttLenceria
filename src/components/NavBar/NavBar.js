import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navBar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/catalogo">Catalogo</Link>
        </li>
        <li>
          <Link to="/envios">Envios</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
        <li>
          <Link to="/preguntasFrecuentes">Preguntas Frecuentes</Link>
        </li>
        <li>
          <Link to="/carrito">Carrito</Link>
        </li>
      </ul>
    </nav>
  );
};
