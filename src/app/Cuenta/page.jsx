import React from 'react'
import Link from "next/link";
function Cuenta() {
  return (
    <div>
        <ul>
            <li>
                <Link href="/Cuenta/Registro">Registro</Link>
            </li>
            <li>
                <Link href="/Cuenta/InicioUsuario">Iniciar Sesion</Link>
            </li>
        </ul>
    </div>

  )
}

export default Cuenta