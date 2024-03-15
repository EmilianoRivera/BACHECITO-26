import Link from 'next/link';
import './Navbar.css';

function LogoAdmin() {
  return (
    <header>
      <div className="navBar" id="mainNavBar">
        <Link href="/" className="bachecito26">
          <img
            src="https://i.postimg.cc/T3NQg97V/Logo.png"
            alt="Logo Bachecito 26" className='nopelien'
          />
          BACHECITO 26
        </Link>
        
      </div>
    </header>
  );
}

export default LogoAdmin;


