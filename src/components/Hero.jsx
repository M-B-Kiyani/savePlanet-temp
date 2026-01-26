import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="purchase-text">Purchase</span>{" "}
            <span className="carbon-text">Carbon Credits</span>
          </h1>
          <h5 className="hero-subtitle">
            Your Direct Path To A Greener Tomorrow
          </h5>
          <p className="hero-tagline">Empower Your Choices</p>
          <p className="hero-description">
            Every day, our actions contribute to the global carbon footprint.
            With a simple step, you can make a significant difference. By
            purchasing carbon credits, you directly support initiatives that
            reduce carbon emissions and promote a sustainable future.
          </p>
          <div className="hero-buttons">
            <button className="primary-button">
              Purchase Carbon Credits
              <img src="/chevron.svg" alt="chevron" />
            </button>
            <button className="secondary-button">
              Invest in Climate Action
              <img src="/chevron.svg" alt="chevron" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
