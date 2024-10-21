import React from 'react';

const MiBoton = ({ label, toggle, color }) => {

  return (
    <div className='MiBoton'>
      <button
        style={{
          justifyContent: 'center', 
          display: 'flex',
          backgroundColor: color,
          fontSize: '20px',
          padding: '10px 20px',
          width: '150px',
          margin: '100px auto',
          border: 'none',
          borderRadius: '5px',
          color: 'white',
          cursor: 'pointer'
        }}
        onClick={toggle}  
      >
        {label}
      </button>
    </div>
  );
}

export default MiBoton;