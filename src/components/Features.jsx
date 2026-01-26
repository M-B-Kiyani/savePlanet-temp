import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Features.css";

function Features() {
  const [selectedStep, setSelectedStep] = useState(null);
  const navigate = useNavigate();

  const steps = [
    {
      image: "step-1.svg",
      title: "Discover Verified Projects",
      detailedDescription:
        "Explore a curated list of carbon offset projects verified by trusted registries, ensuring authenticity and measurable impact. Our platform features projects from reforestation initiatives to renewable energy developments.",
    },
    {
      image: "step-2.svg",
      title: "Choose Your Credits",
      detailedDescription:
        "Select the exact number of carbon credits to offset your footprint, directly contributing to a more sustainable planet. Each credit represents one metric ton of CO2 equivalent removed.",
    },
    {
      image: "step-3.svg",
      title: "Secure Payment",
      detailedDescription:
        "Pay confidently with various options—fiat or crypto—and enjoy full transparency thanks to blockchain records. Our payment system uses industry-leading security protocols.",
    },
    {
      image: "step-4.svg",
      title: "Immediate Retirement",
      detailedDescription:
        "Once purchased, credits are instantly retired, preventing double counting and reinforcing their climate benefit in recognized registries under your name.",
    },
    {
      image: "step-5.svg",
      title: "Receive Proof",
      detailedDescription:
        "Get a digital certificate of retirement, demonstrating your commitment to environmental responsibility. All certificates are blockchain-verified.",
    },
    {
      image: "step-6.svg",
      title: "Stay Updated",
      detailedDescription:
        "Access your account dashboard to track retired credits and receive ongoing sustainability news and insights about the projects you've supported.",
    },
  ];

  const openModal = (step) => setSelectedStep(step);
  const closeModal = () => setSelectedStep(null);

  return (
    <section id="how-it-works" className="features">
      <div className="container">
        <div className="features-header">
          <h2 className="features-title">
            How <span className="highlight">it Works</span>
          </h2>
          <p className="features-subtitle">
            Your Direct Path To A Sustainable Future with SPE Marketplace
          </p>
        </div>
        <div className="steps-grid">
          {steps.map((step, index) => (
            <div
              key={index}
              className="step-card"
              onClick={() => openModal(step)}
            >
              <div className="step-icon">
                <img src={step.image} alt={step.title} className="step-image" />
              </div>
              <h3>{step.title}</h3>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="features-cta">
          <p className="cta-text">
            Join the SPE Marketplace today. Every credit you purchase and retire
            makes a tangible difference in the fight against climate change.
          </p>
          <button
            className="features-cta-button"
            onClick={() => navigate("/how-it-works")}
          >
            Learn More
            <img src="/chevron.svg" alt="chevron" />
          </button>
        </div>
      </div>

      {selectedStep && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            <div className="modal-icon">
              <img
                src={selectedStep.image}
                alt={selectedStep.title}
                className="modal-step-image"
              />
            </div>
            <h2 className="modal-title">{selectedStep.title}</h2>
            <p className="modal-description">
              {selectedStep.detailedDescription}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Features;
