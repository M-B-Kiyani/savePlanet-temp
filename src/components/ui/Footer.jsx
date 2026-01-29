import "./Footer.css";
import { Mail, MapPin } from "lucide-react";

function Footer({
  logoSrc = "/logo.png",
  logoText = "SavePlanetEarth",
  description = "Empowering the world to take direct climate action through verified carbon projects and blockchain transparency.",
  socialLinks = {
    facebook: "#",
    x: "#",
    instagram: "#",
    linkedin: "#",
    youtube: "#",
    github: "#",
  },
  siteMapLinks = [
    { text: "Home", href: "/" },
    { text: "Projects", href: "#projects" },
    { text: "How It Works", href: "#how-it-works" },
    { text: "Resources", href: "#resources" },
  ],
  locations = [
    "United Kingdom",
    "United Arab Emirates",
    "Maldives",
    "Sri Lanka",
  ],
  contactEmail = "info@saveplanetearth.io",
  copyrightText = "2026 SavePlanetEarth. All rights reserved.",
  legalLinks = [
    { text: "Privacy Policy", href: "#" },
    { text: "Disclaimer", href: "#" },
  ],
  className = "",
  style = {},
}) {
  return (
    <footer className={`footer ${className}`} style={style}>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={logoSrc} alt={logoText} className="footer-logo-img" />
              <span className="footer-logo-text">{logoText}</span>
            </div>
            <p className="footer-desc">{description}</p>
            <div className="social-icons">
              {socialLinks.facebook && (
                <a href={socialLinks.facebook} aria-label="Facebook">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              )}
              {socialLinks.x && (
                <a href={socialLinks.x} aria-label="X (formerly Twitter)">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
              )}
              {socialLinks.instagram && (
                <a href={socialLinks.instagram} aria-label="Instagram">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              )}
              {socialLinks.linkedin && (
                <a href={socialLinks.linkedin} aria-label="LinkedIn">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              )}
              {socialLinks.youtube && (
                <a href={socialLinks.youtube} aria-label="YouTube">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              )}
              {socialLinks.github && (
                <a href={socialLinks.github} aria-label="GitHub">
                  <i className="fa-brands fa-github"></i>
                </a>
              )}
            </div>
          </div>

          <div className="footer-links">
            <h3>Site Map</h3>
            <ul>
              {siteMapLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links">
            <h3>Our Locations</h3>
            <ul className="footer-contact">
              {locations.map((location, index) => (
                <li key={index}>
                  <MapPin size={16} /> {location}
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links">
            <h3>Contact Us</h3>
            <ul className="footer-contact">
              <li>
                <Mail size={16} /> {contactEmail}
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {copyrightText}</p>
          <div className="footer-legal">
            {legalLinks.map((link, index) => (
              <a key={index} href={link.href}>
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
