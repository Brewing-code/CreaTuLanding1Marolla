import React from 'react';
import './App.css';

import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  
  
  
   return (
    <>
      <NavBar /> 
      
      
      
      <ItemListContainer greeting='Bienvenido a la tienda del Soldado'/>
      
    </>
  );
}

export default App;  // Solo exporta App por defecto


