import { useState } from "react";

function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        Mi Landing React
      </div>

      <button
        className="menu-boton"
        onClick={() =>
          setMenuAbierto(!menuAbierto)
        }
      >
        ☰
      </button>

      <nav
        className={
          menuAbierto
            ? "nav nav-abierto"
            : "nav"
        }
      >
        <a href="#inicio">Inicio</a>

        <a href="#clientes">
          Clientes
        </a>

        <a href="#registro">
          Registro
        </a>
      </nav>
    </header>
  );
}

export default Header;