import { Link } from "react-router-dom";
import "../css/Header.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <Link to="/" data-key="menu">
            Inicio
          </Link>
        </div>
        <div className="navbar-center">
          <Link to="/salto" data-key="menu1">
            Salto
          </Link>
          <Link to="/doma" data-key="menu2">
            Doma
          </Link>
          <Link to="/carreras" data-key="menu3">
            Carreras
          </Link>
          <Link to="/volteo" data-key="menu4">
            Volteo
          </Link>
          <Link to="/domaVaquera" data-key="menu5">
            Doma Vaquera
          </Link>
          <Link to="/western" data-key="menu6">
            Western
          </Link>
          <Link to="/calculadoraExperiencia" data-key="menu7">
            Calcula tu experiencia
          </Link>
        </div>
        <div className="navbar-right">
          <Link to="/contacto" data-key="menu8">
            Contactame
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
