import React from "react";
import { footerData } from "./footerData";

export const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer__list" id="footer__list">
        {footerData &&
          footerData.length > 0 &&
          footerData.map((value) => (
            <li key ={value.id} className="footer__list">
              <a
                id={value.id}
                className="footer__list__link"
                href={value.href}
                target="_blank"
                rel = "noreferrer"
              >
                <img src={value.rutaImagen} alt={value.redSocial}/>
              </a>
            </li>
          ))}
      </ul>
    </footer>
  );
};
