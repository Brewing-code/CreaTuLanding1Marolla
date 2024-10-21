import React from 'react';
import Navbar from './components/Navbar'; // Importa tu Navbar
import MiBoton from './components/Miboton';   // Importa tu botón

function App() {
  return (
    <div>
      <Navbar />
      <MiBoton  label="Dame duro" callback={() => console.log("Hola Botón")} />
    </div>
  );
}

export default App;  // Solo exporta App por defecto


