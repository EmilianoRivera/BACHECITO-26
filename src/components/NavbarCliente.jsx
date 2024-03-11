import Link from "next/link";

function NavbarCliente() {
  return (
    <nav className="bg-gray-400 p-4">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex space-x-4">
          <li>
            <Link href="/Cuenta/InicioUsuario/Favoritos" className="text-white hover:text-gray-300">
              Favoritos
            </Link>
          </li>
          <li>
            <Link href="/Cuenta/InicioUsuario/Reportes" 
            className="text-white hover:text-gray-300">
              Reportes
            </Link>
          </li>
          <li>
            <Link href="/Cuenta/InicioUsuario/Perfil"
            className="text-white hover:text-gray-300">
              Perfil
            </Link>
          </li>
          <li>
            <Link href="/Cuenta/InicioUsuario/Estadisticas" className="text-white hover:text-gray-300">
            Estadisticas
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavbarCliente;
