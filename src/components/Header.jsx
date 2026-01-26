import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("mobile-menu-active");
    } else {
      document.body.classList.remove("mobile-menu-active");
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove("mobile-menu-active");
    };
  }, [isMobileMenuOpen]);

  const handleMenuClick = (e) => {
    e.preventDefault();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-content">
          <Link to="/" className="logo-link">
            <div className="earth-icon">
              <img src="/logo.png" alt="SavePlanetEarth" />
            </div>
            <div className="logo">
              <h2>SavePlanetEarth</h2>
            </div>
          </Link>
        </div>
        <nav className="header-nav">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/projects" className="nav-link">
            Carbon Projects
          </Link>
          <Link to="/invest" className="nav-link">
            IICA
          </Link>
          <Link to="#" className="nav-link">
            Resources
          </Link>
          <Link to="#" className="nav-link">
            Book a Call
          </Link>
        </nav>
        <div className="header-actions">
          <button className="login-button">Login</button>
          <button className="signup-button">Sign Up</button>
          {!isMobileMenuOpen ? (
            <button className="menu-button" onClick={handleMenuClick}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          ) : (
            <button className="mobile-close-button" onClick={closeMobileMenu}>
              <span className="close-icon">×</span>
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}
      >
        <nav className="mobile-nav">
          <Link to="/" className="mobile-nav-link" onClick={closeMobileMenu}>
            Home
          </Link>
          <Link
            to="/projects"
            className="mobile-nav-link"
            onClick={closeMobileMenu}
          >
            Carbon Projects
          </Link>
          <Link
            to="/invest"
            className="mobile-nav-link"
            onClick={closeMobileMenu}
          >
            IICA
          </Link>
          <Link to="#" className="mobile-nav-link" onClick={closeMobileMenu}>
            Resources
          </Link>
          <Link to="#" className="mobile-nav-link" onClick={closeMobileMenu}>
            Book a Call
          </Link>
        </nav>
        <div className="mobile-actions">
          <button className="mobile-login-button">Login</button>
          <button className="mobile-signup-button">Sign Up</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
