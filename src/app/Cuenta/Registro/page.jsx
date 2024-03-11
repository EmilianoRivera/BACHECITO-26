
"use client";
import React, { useState } from 'react';
import "./registro.css";


import React  from "react";
function Registro() {
  const [active, setActive] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false); // Estado para controlar la visibilidad de la política de privacidad
  

  const handleButtonClick = () => {
    setActive(!active);
  };

  const handlePrivacyPolicyClick = () => {
    setShowPrivacyPolicy(true); // Mostrar la política de privacidad al hacer clic en el enlace
  };


  const [name, setName] = useState(''); // Estado para almacenar el valor del correo electrónico
  const [nameValido, setNameValido] = useState(true); // Estado para indicar si el correo electrónico es válido

  const handleNameChange = (event) => {
    let text = event.target.value;
    // Remover caracteres especiales excepto el apóstrofe
    text = text.replace(/[^A-Za-z' ]/g, '');
    // Actualizar el estado del nombre
    setName(text);
  };
  


  return (

    <div className={`container ${active ? "active" : ""}`} id="container">
      <div className="form-container sign-up">
        <form id="form-registro">
          <h1 className='title' id="regis-title" >¡QUE FELICIDAD QUE TE NOS UNAS!</h1>
          <input type="text" className="datos" placeholder='Nombre(s)' onChange={handleNameChange} onpaste="return false"/>
          <div className="apellidos-container">
            <input type="text" className="datos" id="appat" placeholder='Apellido Paterno'/>
            <input type="text" className="datos" id="apmat" placeholder='Apellido Materno'/>
          </div>
          <input type="date" className="datos" placeholder='Fecha de Nacimiento'/>
          <input type="email" className="datos" placeholder='Correo Electrónico'/>
          {/* Agregamos la clase "invalido" si el correo electrónico no es válido */}
          <input type="password" className="datos" placeholder='Contraseña'/>
          <div className="checkbox-container">
            <input type="checkbox" id="checkbox-pri" name="aceptar" />
            <p id="a-pri">He leído y acepto la <a href="#" id="a-pol" onClick={handlePrivacyPolicyClick}>Política de Privacidad</a>😉</p>
          </div>
          <button id="registrarse-btn">Registrarse</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form id="form-inicar-sesion">
          <h1 className='title' id="ini-title">¡QUE BUENO ES TENERTE DE VUELTA!</h1>
          <input type="email" className="datos" placeholder='Correo Electrónico'/>
          <input type="password" className="datos" placeholder='Contraseña'/>
          <a id="olvi-contra" href="#">¿Olvidaste tu contraseña? 😰</a>
          <button id="iniciarSesion-btn">Iniciar Sesión</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1 className='title-2'>¿Ya tienes una cuenta? 🧐</h1>
            <p className='p-advertencia'>¡Entra a tu cuenta ahora mismo!</p>
            <button className="cuentita" id="login" onClick={handleButtonClick}>Iniciar Sesión</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1 className='title-2'>¿No tienes una cuenta? 😠</h1>
            <p className='p-advertencia'>¡No esperes más y regístrate!</p>
            <button className="cuentita" id="register" onClick={handleButtonClick}>Crear Cuenta</button>
          </div>
        </div>
      </div>

      {/* Pantalla de política de privacidad */}
      {showPrivacyPolicy && (
        <div className="privacy-policy">
          <h1>POLITICA DE PRIVACIDAD</h1>
          <button onClick={() => setShowPrivacyPolicy(false)}>Cerrar</button>
        </div>
      )}

    </div>
    

  );
}

export default Registro;
