import React from 'react';
import './Footer.css';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin } from 'lucide-react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/logo.png" alt="SavePlanetEarth" className="footer-logo-img" />
              <span className="footer-logo-text">SavePlanetEarth</span>
            </div>
            <p className="footer-desc">
              Empowering the world to take direct climate action through verified carbon projects and blockchain transparency.
            </p>
            <div className="social-icons">
              <a href="#"><Facebook size={20} /></a>
              <a href="#"><Twitter size={20} /></a>
              <a href="#"><Instagram size={20} /></a>
              <a href="#"><Linkedin size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h3>Site Map</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#resources">Resources</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Our Locations</h3>
            <ul className="footer-contact">
              <li><MapPin size={16} /> United Kingdom</li>
              <li><MapPin size={16} /> United Arab Emirates</li>
              <li><MapPin size={16} /> Maldives</li>
              <li><MapPin size={16} /> Sri Lanka</li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Contact Us</h3>
            <ul className="footer-contact">
              <li><Mail size={16} /> info@saveplanetearth.io</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 SavePlanetEarth. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
