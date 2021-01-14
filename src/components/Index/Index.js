import React from "react";

export const Index = () => {
  return (
    <section>
      <div className="index">
        <div className="index__novedades">
          <p className="index__title">Novedades</p>
          <article className="index__text">
            Actualmente el formulario de contacto no está en funcionamiento,
            comunicarse desde las redes sociales que se encuentran al final de
            la ventana del navegador, por el momento únicamente habilitados por
            whatsapp y mail.
          </article>
        </div>

        <div className="index__image">
          <img
            src="./images/products/PIN43502.jpg"
            alt="Prentt Lenceria"
            className="index__image--item"
          />
        </div>

        <div className="index__ofertas">
          <p className="index__title">Ofertas</p>
          <article className="index__text">
            <p>Efectivo: 10% de descuento en compras mayores a $3000,00.</p>
            <p>MercadoPago: promociones habilitadas en mercado pago.</p>
          </article>
        </div>
      </div>
    </section>
  );
};
