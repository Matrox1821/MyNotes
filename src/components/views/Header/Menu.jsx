import { Link } from "react-router-dom";
export const MenuOpen = (isMenuOpen, setMenuOpen) => {
  return (
    <div className={isMenuOpen}>
      <div className="nav-item">
        <Link className="nav-links" to="/home" onClick={setMenuOpen}>
          Inicio
        </Link>
      </div>
      <div className="nav-item">
        <Link className="nav-links" to="/date" onClick={setMenuOpen}>
          Datos
        </Link>
      </div>
      <div className="nav-item">
        <Link className="nav-links-mobile" to="/history" onClick={setMenuOpen}>
          Historial
        </Link>
      </div>
    </div>
  );
};
