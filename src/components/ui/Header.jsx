import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header({
  logoSrc = "/logo.png",
  logoText = "SavePlanetEarth",
  logoHref = "/",
  showLogin = true,
  showSignup = true,
  showMenu = true,
  loginText = "Login",
  signupText = "Sign Up",
  onLoginClick,
  onSignupClick,
  onMenuClick,
  className = "",
  style = {},
}) {
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

  const handleLoginClick = (e) => {
    if (onLoginClick) {
      e.preventDefault();
      onLoginClick();
    }
  };

  const handleSignupClick = (e) => {
    if (onSignupClick) {
      e.preventDefault();
      onSignupClick();
    }
  };

  const handleMenuClick = (e) => {
    e.preventDefault();
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (onMenuClick) {
      onMenuClick();
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${className}`} style={style}>
      <div className="header-container">
        <div className="logo-content">
          <Link to={logoHref} className="logo-link">
            <div className="earth-icon">
              <img src={logoSrc} alt={logoText} />
            </div>
            <div className="logo">
              <h2>{logoText}</h2>
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
          {showLogin && (
            <button className="login-button" onClick={handleLoginClick}>
              {loginText}
            </button>
          )}
          {showSignup && (
            <button className="signup-button" onClick={handleSignupClick}>
              {signupText}
            </button>
          )}
          {showMenu && !isMobileMenuOpen && (
            <button className="menu-button" onClick={handleMenuClick}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          )}
          {showMenu && isMobileMenuOpen && (
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
          <button className="mobile-login-button" onClick={handleLoginClick}>
            {loginText}
          </button>
          <button className="mobile-signup-button" onClick={handleSignupClick}>
            {signupText}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
