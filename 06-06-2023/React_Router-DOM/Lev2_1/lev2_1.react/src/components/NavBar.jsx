import { useState } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [color, setColor] = useState("aqua");

  return (
    <nav>
      <NavLink className="logo" to="/">
        <img src="../../ice-cream.png" alt="ice-cream" />
        <h2>Carlos Cafe Wiesbaden</h2>
      </NavLink>
      <div className="div-flex">
        <NavLink
          className="link"
          to="/speisekarte"
          style={{ background: color }}
        >
          Speisekarte
        </NavLink>
        <NavLink className="link" to="/kontakt" style={{ background: color }}>
          Kontakt
        </NavLink>
        <NavLink
          className={"link"}
          to="/oeffnungszeiten"
          style={{ background: color }}
        >
          Öffnungszeiten
        </NavLink>
        <NavLink className={"link"} to="/galerie" style={{ background: color }}>
          Galerie
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
