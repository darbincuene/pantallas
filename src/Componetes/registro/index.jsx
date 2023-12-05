import React, { useState } from 'react';
import imagen from '../../imagen/logo.jpeg';
import './registro.css';
import neymar from "../../imagen/neymar.jpg"

function Registro() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes hacer algo con los datos, como enviarlos a un servidor
    console.log({ nombre, apellido, telefono });
  };

  return (
    <>
      <div className='mayor'>
       
        <div className='contenedor'>
       
          <div className='imagen'>
            <img src={imagen} alt="Logo" />
          </div>
          <div className='darbin'>
            <img src={neymar}className='neymar' alt="" />
        </div>

          <div className='formulario'>
            <form onSubmit={handleSubmit}>
              <label htmlFor="nombre">Nombre:</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Ingresa tu nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />

              <label htmlFor="apellido">Apellido:</label>
              <input
                type="text"
                id="apellido"
                name="apellido"
                placeholder="Ingresa tu apellido"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
              />

              <label htmlFor="telefono">Número de Teléfono:</label>
              <input
                type="number"
                id="telefono"
                name="telefono"
                placeholder="Ingresa tu número de teléfono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />

              <button className='dar' type="submit">Registrarse</button>
               </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registro;
