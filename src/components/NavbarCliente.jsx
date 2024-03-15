"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import './Navbar.css';

function NavbarCliente() {
  const [menuActive, setMenuActive] = useState(false);
  const [showMenuIcon, setShowMenuIcon] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowMenuIcon(window.innerWidth <= 800);
    };

    handleResize(); // Call on initial render
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className={`navBar ${menuActive ? 'showMenu' : ''}`}>
      <Link href="/" className="bachecito26">
        <img
          src="https://i.postimg.cc/T3NQg97V/Logo.png"
          alt="Logo Bachecito 26"
          className="nopelien"
        />
        BACHECITO 26
      </Link>

      <div className={`menuIcon ${showMenuIcon ? 'span-anime' : 'hidden'}`} onClick={toggleMenu}>
        <div className={`menu-icon ${menuActive ? '' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="menuItems">
          <Link href="/Cuenta/Perfil" className="opc btn--white prueba">
            <span>Perfil →</span>
          </Link>
          <Link href="/" className="opc">
            Baches Guardados en el web
          </Link>
          <Link href="/Cuenta/InicioUsuario" className="opc">
            Estadísticas
          </Link>
          <Link href="/Reportes" className="opc">
            Reportes
          </Link>
      </div>
    </div>
  );
}

export default NavbarCliente;
