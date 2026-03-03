import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="container nav-wrap">
        <NavLink className="brand" to="/">
          <span className="brand-mark">SUS</span>
          <div>
            <p>Shiv Urban Spaces</p>
            <small>SEBI Registered Channel Partner</small>
          </div>
        </NavLink>

        <nav className="nav-links" aria-label="Main navigation">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
