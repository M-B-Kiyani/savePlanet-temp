import "./CTA.css";

function CTA() {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-content">
          <div className="cta-text">
            <h2 className="cta-title">
              Our <span className="highlight">NFTs For</span>
              <br />
              Climate Action
            </h2>
            <p className="cta-description">
              Join the movement to combat climate change through blockchain
              technology. Our NFTs represent verified carbon offset projects,
              creating a transparent and traceable way to make a positive
              environmental impact.
            </p>
            <div className="cta-features">
              <div className="feature-item">
                <span className="feature-icon">🌱</span>
                <span>Verified Projects</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🔗</span>
                <span>Blockchain Verified</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">📊</span>
                <span>Transparent Impact</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🌍</span>
                <span>Global Reach</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">💚</span>
                <span>Sustainable Future</span>
              </div>
            </div>
            <button className="cta-button">Start Your Climate Journey</button>
          </div>
          <div className="cta-image">
            <img src="/bg-hero-20767579.png" alt="Climate Action" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
