import React from "react";

const UserForm = (deleteAll) => {

  
  return (
    <div className="userForm">
      <div>
        <p>Completar formulario de facturacion</p>
      </div>
      <div class="form__inputBox">
        <input type="text" name="nombre" id="nombre" placeholder="Nombre" />
      </div>
      <div class="form__inputBox">
        <input
          type="text"
          name="apellido"
          id="apellido"
          placeholder="Apellido"
        />
      </div>
      <div class="form__inputBox">
        <input
          type="email"
          name="nombre"
          id="email"
          placeholder="Email de Contacto"
        />
      </div>

      <div>
        <textarea
          name="mensaje"
          id="mensaje"
          placeholder="Motivo de consulta"
          cols="20"
          rows="5"
        ></textarea>
      </div>
    </div>
  );
};

export default UserForm;
