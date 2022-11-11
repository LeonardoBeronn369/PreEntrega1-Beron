import { CartWidget } from "../CartWidget/CartWidget";
import "./NavBar.css";

import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="nav-container">
      <div>
        <p className="logo-Rivia">Rivia Clothing</p>
      </div>
      <div className="navegacion">
        <Link to="/">Inicio</Link>
        <Link to="/contacto">Contacto</Link>
        <NavLink
          className={({ isActive }) =>
            isActive === true ? "claseActiva" : "claseInactiva"
          }
          to="/category/camisas"
        >
          Camisas
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive === true ? "claseActiva" : "claseInactiva"
          }
          to="/category/zapatos"
        >
          Zapatos
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive === true ? "claseActiva" : "claseInactiva"
          }
          to="/category/pantalones"
        >
          Pantalones
        </NavLink>
      </div>
      <div>
        <CartWidget />
      </div>
    </nav>
  );
};
