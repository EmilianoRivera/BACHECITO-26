"use client";
import React, { useEffect } from 'react';
import './Cursor.css';

//hay que corregir el menú de hamburguesa
function Cursor() {

  useEffect(() => {
    // Función para manipular el cursor de la lupa
    function handleMagnifyCursor(e) {
      const magnifyCursor = document.querySelector('.magnify-cursor');
      magnifyCursor.style.left = e.pageX + 'px';
      magnifyCursor.style.top = e.pageY + 'px';
    }

    // Agregar evento de escucha para mover el cursor de la lupa
    document.addEventListener('mousemove', handleMagnifyCursor);

    // Limpiar el evento de escucha al desmontar el componente
    return () => {
      document.removeEventListener('mousemove', handleMagnifyCursor);
    };
  }, []);

  return (
    <div className='cursordiv'>
        <div className="magnify-cursor"></div>
    </div>
    
  );
}

export default Cursor;
