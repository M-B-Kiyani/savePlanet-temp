import "./Contact.css";

function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-text">
            <h2 className="contact-title">
              Ready to Create <span className="highlight">Action Projects</span>
            </h2>
            <div className="contact-features">
              <div className="contact-feature">
                <div className="feature-icon">
                  <span>🌱</span>
                </div>
                <div className="feature-content">
                  <h3>Create Impact</h3>
                  <p>Launch your own carbon offset project</p>
                </div>
              </div>
              <div className="contact-feature">
                <div className="feature-icon">
                  <span>📈</span>
                </div>
                <div className="feature-content">
                  <h3>Track Progress</h3>
                  <p>Monitor your environmental impact</p>
                </div>
              </div>
              <div className="contact-feature">
                <div className="feature-icon">
                  <span>🤝</span>
                </div>
                <div className="feature-content">
                  <h3>Join Community</h3>
                  <p>Connect with like-minded individuals</p>
                </div>
              </div>
              <div className="contact-feature">
                <div className="feature-icon">
                  <span>💚</span>
                </div>
                <div className="feature-content">
                  <h3>Make Difference</h3>
                  <p>Contribute to a sustainable future</p>
                </div>
              </div>
              <div className="contact-feature">
                <div className="feature-icon">
                  <span>�🔗</span>
                </div>
                <div className="feature-content">
                  <h3>Blockchain Verified</h3>
                  <p>Transparent and secure transactions</p>
                </div>
              </div>
            </div>
            <button className="contact-button">Get Started Today</button>
          </div>
          <div className="contact-image">
            <img src="/bg-hero-20767579.png" alt="Climate Action Projects" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
