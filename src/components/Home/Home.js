import React from "react";
import "./_home.scss";

export const Home = () => {
  return (
    <section>
      <div className="index">
        <div className="index__novedades">
          <p className="index__title">Novedades</p>
          <article className="index__text">
            Contacto por el momento únicamente habilitados por whatsapp y mail.
          </article>
        </div>

        <div className="index__image">
          <img
            src={`${process.env.PUBLIC_URL}/images/products/PIN43502.jpg`}
            alt="Prentt Lenceria"
            className="index__image--item"
          />
        </div>

        <div className="index__ofertas">
          <p className="index__title">Ofertas</p>
          <article className="index__text">
            <p>Efectivo: 10% de descuento en compras mayores a $3000,00.</p>
          </article>
        </div>
      </div>
    </section>
  );
};
