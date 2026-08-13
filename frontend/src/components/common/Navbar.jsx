import { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className="navbar">

      <div className="navbar-logo">
        <h2>🥗 Plateora</h2>
      </div>

      <div className="navbar-links">
        <NavLink to="/" onClick={closeMenu}>
          Home
        </NavLink>

        <NavLink to="/history" onClick={closeMenu}>
          History
        </NavLink>

        <NavLink to="/profile" onClick={closeMenu}>
          Profile
        </NavLink>
      </div>

      <div className="navbar-settings">
        <NavLink to="/settings" onClick={closeMenu}>
          Settings
        </NavLink>
      </div>

      <button
        className="mobile-menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        ☰
      </button>

      {menuOpen && (
        <div className="mobile-menu">

          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/history" onClick={closeMenu}>
            History
          </NavLink>

          <NavLink to="/profile" onClick={closeMenu}>
            Profile
          </NavLink>

          <NavLink to="/settings" onClick={closeMenu}>
            Settings
          </NavLink>

        </div>
      )}

    </nav>
  );
}

export default Navbar;