import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <div className="container nav-wrap">
        <div className="nav-top-row">
          <NavLink className="brand" to="/" onClick={closeMenu}>
            <span className="brand-mark">SUS</span>
            <div>
              <p>Shiv Urban Spaces</p>
              <small>SEBI Registered Channel Partner</small>
            </div>
          </NavLink>

          <button
            type="button"
            className="menu-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prevState) => !prevState)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`} aria-label="Main navigation">
          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={closeMenu}>
            About Us
          </NavLink>
          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
