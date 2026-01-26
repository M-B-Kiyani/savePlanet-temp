import { useNavigate } from "react-router-dom";
import { Header, Footer } from "../components/ui/index.js";
import "./HowItWorksPage.css";

function HowItWorksPage() {
  const navigate = useNavigate();

  const handlePurchaseClick = () => {
    navigate("/projects");
  };

  const handleInvestClick = () => {
    navigate("/invest");
  };
  const steps = [
    {
      icon: "/Explore.svg",
      stepName: "Explore",
      title: "Browse Carbon Offset Projects",
      description:
        "Explore our curated selection of verified carbon offset projects from around the world. Each project is thoroughly vetted and certified by recognized standards.",
    },
    {
      icon: "/Select.svg",
      stepName: "Select",
      title: "Calculate Your Impact",
      description:
        "Use our carbon calculator to determine your footprint and see exactly how many credits you need to offset your emissions effectively.",
    },
    {
      icon: "/Options.svg",
      stepName: "Options",
      title: "Secure & Transparent Payment",
      description:
        "Complete your purchase with confidence using our secure payment system. All transactions are recorded on the blockchain for full transparency.",
    },
    {
      icon: "/NFT Minting.svg",
      stepName: "NFT Minting",
      title: "Immediate Credit Retirement",
      description:
        "Your carbon credits are immediately retired upon purchase, ensuring they cannot be resold and your impact is permanent and verified.",
    },
    {
      icon: "/Digital Certificate.svg",
      stepName: "Digital Certificate",
      title: "Receive Digital Certificate",
      description:
        "Get your blockchain-verified certificate of carbon credit retirement as proof of your environmental commitment and impact.",
    },
    {
      icon: "/Account Dashboard.svg",
      stepName: "Account Dashboard",
      title: "Track Your Progress",
      description:
        "Monitor your ongoing environmental impact through your personal dashboard and receive updates on the projects you've supported.",
    },
  ];

  return (
    <div className="how-it-works-page">
      <Header />

      {/* Hero Section */}
      <section className="hiw-hero">
        <div className="hiw-hero-content">
          <h1 className="hiw-hero-title">How It Works</h1>
          <p className="hiw-hero-subtitle">
            Our carbon credit marketplace operates in a straightforward and
            transparent manner, integrating blockchain and artificial
            intelligence to guarantee reliability and seamless transactions.
            Here's a simple step-by-step process for buying and selling carbon
            credits on our platform:
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="hiw-steps">
        <div className="hiw-container">
          <h2 className="hiw-section-title">
            How It Works
            <br />
            <span className="hiw-subtitle">
              Your Direct Path To A Sustainable Future with SPE Marketplace
            </span>
          </h2>

          <div className="hiw-steps-grid">
            {steps.map((step, index) => (
              <div key={index} className="hiw-step-item">
                <div className="hiw-step-icon">
                  <img src={step.icon} alt={step.title} />
                </div>
                <div className="hiw-step-number">
                  Step {index + 1} : {step.stepName}
                </div>
                <h3 className="hiw-step-title">{step.title}</h3>
                <p className="hiw-step-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Detailed Benefits Section */}
      <section className="hiw-detailed-benefits">
        <div className="hiw-container">
          <h2 className="hiw-section-title">
            Why Purchase Through Our Marketplace?
          </h2>
          <div className="hiw-benefit-cards">
            {/* Transparent & Trustworthy */}
            <div className="hiw-benefit-card">
              <div className="hiw-benefit-card-content">
                <div className="hiw-benefit-card-text">
                  <div className="hiw-benefit-card-label">
                    USER-FRIENDLY EXPERIENCE
                  </div>
                  <h3 className="hiw-benefit-card-title">
                    Transparent & Trustworthy
                  </h3>
                  <p className="hiw-benefit-card-description">
                    Every carbon offset project on our platform undergoes
                    rigorous verification by The Planetary Carbon Standard. We
                    ensure that each credit represents a genuine reduction in
                    greenhouse gases.
                  </p>
                  <p className="hiw-benefit-card-description">
                    <strong>Direct Impact:</strong> Your purchase goes straight
                    to the source, funding projects that make a tangible
                    difference in the environment and communities.
                  </p>
                </div>
                <div className="hiw-benefit-card-image">
                  <div className="hiw-benefit-card-icon">
                    <img src="/over.svg" alt="Verified" />
                  </div>
                </div>
              </div>
            </div>

            {/* Simple & Seamless */}
            <div className="hiw-benefit-card hiw-benefit-card-reverse">
              <div className="hiw-benefit-card-content">
                <div className="hiw-benefit-card-image">
                  <div className="hiw-benefit-card-icon">
                    <img src="/over-1.svg" alt="Simple Process" />
                  </div>
                </div>
                <div className="hiw-benefit-card-text">
                  <div className="hiw-benefit-card-label">
                    USER-FRIENDLY EXPERIENCE
                  </div>
                  <h3 className="hiw-benefit-card-title">Simple & Seamless</h3>
                  <p className="hiw-benefit-card-description">
                    Our platform is designed for ease. Browse, select, and
                    purchase credits with just a few clicks.
                  </p>
                  <p className="hiw-benefit-card-description">
                    <strong>Instant Retirement:</strong> To eliminate double
                    counting and ensure genuine impact, purchased credits are
                    instantly retired to a dedicated Retirement Wallet.
                  </p>
                </div>
              </div>
            </div>

            {/* Educational & Engaging */}
            <div className="hiw-benefit-card">
              <div className="hiw-benefit-card-content">
                <div className="hiw-benefit-card-text">
                  <div className="hiw-benefit-card-label">
                    LEARN AS YOU SHOP
                  </div>
                  <h3 className="hiw-benefit-card-title">
                    Educational & Engaging
                  </h3>
                  <p className="hiw-benefit-card-description">
                    Discover the stories behind each project. Understand the
                    impact of your purchase, from reforestation efforts in the
                    Amazon to solar/wind/hydro farms in Asia.
                  </p>
                  <p className="hiw-benefit-card-description">
                    <strong>Track Your Impact:</strong> With the PCS Registry
                    interactive dashboard, monitor the positive change you're
                    driving in real-time.
                  </p>
                </div>
                <div className="hiw-benefit-card-image">
                  <div className="hiw-benefit-card-icon">
                    <img src="/over-2.svg" alt="Educational" />
                  </div>
                </div>
              </div>
            </div>

            {/* Competitive Pricing & Value */}
            <div className="hiw-benefit-card hiw-benefit-card-reverse">
              <div className="hiw-benefit-card-content">
                <div className="hiw-benefit-card-image">
                  <div className="hiw-benefit-card-icon">
                    <img src="/over-3.svg" alt="Value" />
                  </div>
                </div>
                <div className="hiw-benefit-card-text">
                  <div className="hiw-benefit-card-label">
                    AFFORDABLE OPTIONS
                  </div>
                  <h3 className="hiw-benefit-card-title">
                    Competitive Pricing & Value
                  </h3>
                  <p className="hiw-benefit-card-description">
                    We offer a range of credits to fit every budget, ensuring
                    everyone can contribute to a greener planet.
                  </p>
                  <p className="hiw-benefit-card-description">
                    <strong>Value Beyond Carbon:</strong> Beyond just offsetting
                    emissions, your purchase supports UNSDGs, biodiversity, job
                    creation, and community development.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="hiw-cta-buttons">
            <button
              className="hiw-cta-button hiw-cta-primary"
              onClick={handlePurchaseClick}
            >
              Purchase Carbon Credits
              <img src="/chevron.svg" alt="chevron" />
            </button>
            <button
              className="hiw-cta-button hiw-cta-secondary"
              onClick={handleInvestClick}
            >
              Invest in Climate Action
              <img src="/chevron.svg" alt="chevron" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default HowItWorksPage;
