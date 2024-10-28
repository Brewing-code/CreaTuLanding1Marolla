import React from 'react'
import {useState} from 'react';



const Button = ({fn, texto}) => {



  console.log("se renderiza boton")

  return (
    <button onClick={()=>fn()}> {texto} </button>
  )
}

export default Button