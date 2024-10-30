import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'


const NavBar = () => {
    return (
      <nav className='nav'> 
        <h1>Soldier Hops Cerveza</h1>
        <ul>
            <li><a href={"/"}>Home</a></li>
            <li><a href="#">Birras</a></li>
            <li><a href="#">Gorras</a></li>
            <li><a href="#">Remeras</a></li>
        </ul>
        <CartWidget />
      </nav>
      
    )
  }

export default NavBar