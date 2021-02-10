import React from "react";
import { Link } from "react-router-dom";
import { CartWigdet } from "../CartWidget/CartWidget";
import "./_navBar.scss";

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
          <CartWigdet />
        </li>
      </ul>
    </nav>
  );
};
