import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-white hover:text-gray-300">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/SobreNosotros" 
            className="text-white hover:text-gray-300">
              Sobre Nosotros
            </Link>
          </li>
          <li>
            <Link href="/Reportes"
            className="text-white hover:text-gray-300">
              Reportes
            </Link>
          </li>
          <li>
            <Link href="/Cuenta/Registro" className="text-white hover:text-gray-300">
            Registrese
            </Link>
          </li>
          <li>
            <Link href="/Cuenta/IniciarSesion" className="text-white hover:text-gray-300">
            Iniciar Sesion
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
