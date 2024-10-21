import React, { useState } from 'react'; // Importa useState

const MiBoton = ({ label }) => {
  // Definir un estado inicial para el color
  const [color, setColor] = useState('rgb(20, 160, 240)'); // El botón empieza siendo rojo

  // Función que cambia el color entre rojo y azul
  const toggleColor = () => {
    setColor(prevColor => (prevColor === 'rgb(20, 160, 240)' ? 'rgb(180, 80, 240' : 'rgb(20, 160, 240)'));
  };

  return (
    <div className='MiBoton'>
      <button
        style={{
          backgroundColor: color,
          fontSize: '20px',  // Cambia el tamaño de la tipografía
          padding: '10px 20px',  // Maneja el padding
          margin: '10px',  // Maneja el margen externo
          border: 'none',  // Quita los bordes
          borderRadius: '5px',  // Agrega bordes redondeados
          color: 'white',  // Cambia el color del texto
          cursor: 'pointer'  // Cambia el cursor cuando pasa sobre el botón
        }}
        onClick={toggleColor}
      >
        {label}
      </button>
    </div>
  );
}


export default MiBoton;