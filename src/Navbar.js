import React, { useState } from 'react';

function Navbar() {
  // Estado para manejar si el enlace está en hover
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <nav style={styles.nav}>
      <ul style={styles.navList}>
        {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
          <li key={index} style={styles.navItem}>
            <a
              href={`#${item.toLowerCase()}`}
              style={hoverIndex === index ? styles.navLinkHover : styles.navLink}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: '#333',
    padding: '10px',
  },
  navList: {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'space-around',
    margin: 0,
    padding: 0,
  },
  navItem: {
    display: 'inline',
  },
  navLink: {
    color: '#fff',           // Color de los enlaces cuando no está en hover
    textDecoration: 'none',  // Quita el subrayado
    fontSize: '18px',        // Tamaño de la fuente
    transition: 'color 0.3s ease', // Transición suave para el cambio de color
  },
  navLinkHover: {
    color: '#cdf334',        // Color del enlace cuando está en hover
    textDecoration: 'none',  // Asegura que no haya subrayado
  },
};

export default Navbar;