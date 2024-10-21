import React, { useState } from 'react';
import Navbar from './components/Navbar'; // Importa tu Navbar
import MiBoton from './components/Miboton';   // Importa tu botón

function App() {
  const [color, setColor] = useState('rgb(20, 160, 240)');

  const toggleColor = () => {
    setColor(prevColor => (prevColor === 'rgb(20, 160, 240)' ? 'rgb(180, 80, 240)' : 'rgb(20, 160, 240)'));
  };

  return (
    <div>
      <Navbar />
      <MiBoton label="Dame duro" toggle={toggleColor} color={color} />
    </div>
  );
}

export default App;  // Solo exporta App por defecto


