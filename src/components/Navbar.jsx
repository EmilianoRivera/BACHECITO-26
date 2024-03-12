"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import './Navbar.css';


//hay que corregir el menú de hamburguesa
function Navbar() {
  const [showMenu, setShowMenu] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      setShowMenu(window.innerWidth <= 30 * window.innerWidth / 100);
    };


    handleResize();


    window.addEventListener('resize', handleResize);


    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };


  return (
    <div className={`navBar ${showMenu ? 'showMenu' : ''}`} id="mainNavBar">
        <Link href="/" className="bachecito26">
          <img
            src="https://i.postimg.cc/T3NQg97V/Logo.png"
            alt="Logo Bachecito 26" className='nopelien'
          />
          BACHECITO 26
        </Link>
        <div className="menuIcon" onClick={toggleMenu}>
          <div className="menuIcon__line"></div>
          <div className="menuIcon__line"></div>
          <div className="menuIcon__line"></div>
        </div>
        <div className="menuItems">
          <Link href="/prueba" className="opc">
            Sobre Nosotros
          </Link>
          <Link href="/Reportes" className="opc">
            Reportes
          </Link>
          <Link href="/" className="opc">
            Inicio
          </Link>
          <Link href="/Cuenta/Registro" className="opc btn--white prueba">
            <span>Cuenta →</span>
          </Link>
        </div>
      </div>
  );
}


export default Navbar;


