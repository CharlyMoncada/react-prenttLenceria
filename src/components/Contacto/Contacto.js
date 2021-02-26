import React from "react";
import { provinciasData } from "./provinciasData";
import "./_contacto.scss";

export const Contacto = () => {

  return (
    <section>
      <div className="contacto">
        <div className="form">
          <form action="#" method="POST" enctype="multipart/form-data">
            <div>
              <p>Completar formulario de contacto</p>
            </div>
            <div className="form__inputBox">
              <input
                type="text"
                name="nombre"
                id="nombre"
                placeholder="Nombre"
                required
                onblur="saveField(this)"
              />
            </div>
            <div className="form__inputBox">
              <input
                type="text"
                name="apellido"
                id="apellido"
                placeholder="Apellido"
                required
                onblur="saveField(this)"
              />
            </div>
            <div className="form__inputBox">
              <input
                type="number"
                name="telefono"
                placeholder="Número de Contacto"
                id="telefono"
                onblur="saveField(this)"
              />
            </div>
            <div className="form__inputBox">
              <input
                type="email"
                name="nombre"
                id="email"
                placeholder="Email de Contacto"
                required
                onblur="saveField(this)"
              />
            </div>

            <div>
              <label>Provincia</label>
              <select id="provincias" class="browser-default">
                {provinciasData &&
                  provinciasData.length > 0 &&
                  provinciasData
                    .map((value) => (
                    <option key={value.id}>{value.nombre}</option>
                  ))}
              </select>
            </div>

            <div>
              <label>Tipo de Consulta</label>
              <select name="consulta">
                <option value="minorista">Minorista</option>
                <option value="mayorista">Mayorista</option>
              </select>
            </div>

            <div>
              <textarea
                name="mensaje"
                placeholder="Motivo de consulta"
                cols="40"
                rows="5"
              ></textarea>
            </div>
            <div className="form__buttons">
              <div className="form__buttons_item">
                <input type="reset" value="Limpiar Formulario" />
              </div>
              <div className="form__buttons_item">
                <input
                  type="submit"
                  value="Enviar Formulario"
                  onclick="sendEmail()"
                />
              </div>
            </div>
          </form>
        </div>

        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              title="Google Map"
              width="500"
              height="400"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=buenos%20aires%20primera%20junta%20estacion%20subte&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
            <a href="https://fmovies2.org">fmovies</a>
          </div>
        </div>
      </div>
    </section>
  );
};
