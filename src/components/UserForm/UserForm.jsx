import React from "react";

const UserForm = () => {
  return (
    <div className="userForm">
      <form action="#" method="POST" enctype="multipart/form-data">
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
            onblur="saveField(this)"
          />
        </div>
        <div class="form__inputBox">
          <input
            type="text"
            name="apellido"
            id="apellido"
            placeholder="Apellido"
            required
            onblur="saveField(this)"
          />
        </div>
        <div class="form__inputBox">
          <input
            type="number"
            name="telefono"
            placeholder="Número de Contacto"
            id="telefono"
            onblur="saveField(this)"
          />
        </div>
        <div class="form__inputBox">
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
          <textarea
            name="mensaje"
            placeholder="Motivo de consulta"
            cols="20"
            rows="5"
          ></textarea>
        </div>
        <div class="form__buttons">
          <div class="form__buttons_item">
            <input type="reset" value="Limpiar Formulario" />
          </div>
          {/* <div class="form__buttons_item">
            <input
              type="submit"
              value="Enviar Formulario"
              onclick="sendEmail()"
            />
          </div> */}
        </div>
      </form>
    </div>
  );
};

export default UserForm;
