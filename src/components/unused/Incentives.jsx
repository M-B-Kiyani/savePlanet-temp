import React from 'react';
import './Incentives.css';
import { CheckCircle2 } from 'lucide-react';

function Incentives() {
  const points = [
    "Directly support verified carbon avoidance and removal projects.",
    "Receive blockchain-verified certificates for every credit retired.",
    "Contribute to multiple Sustainable Development Goals (SDGs).",
    "Transparent tracking of funds and environmental impact.",
    "Empower local communities through sustainable development.",
    "Join a global community of environmentally conscious investors."
  ];

  return (
    <section className="incentives">
      <div className="container incentives-container">
        <div className="incentives-image">
          <img src="/bg-hero-20767579.png" alt="Nature" className="incentives-img" />
          <div className="image-overlay"></div>
        </div>
        <div className="incentives-content">
          <h2 className="incentives-title">Invest in <span className="highlight">Climate Action</span></h2>
          <p className="incentives-text">
            Our Climate Action NFTs represent a unique opportunity to invest in the planet's future while securing your own environmental legacy.
          </p>
          <ul className="incentives-list">
            {points.map((point, index) => (
              <li key={index} className="incentive-item">
                <CheckCircle2 size={24} className="check-icon" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <button className="btn-hero btn-hero-secondary">Get Started Now</button>
        </div>
      </div>
    </section>
  );
}

export default Incentives;
