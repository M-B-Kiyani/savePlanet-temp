import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getProjectById } from "../data/projects";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import MapComponent from "../components/ui/MapComponent";
import "./ProjectDetailPage.css";

function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = getProjectById(id);
  const [carbonCredits, setCarbonCredits] = useState(1);
  const [expandedSections, setExpandedSections] = useState({
    description: true,
    pcsRegistry: false,
    carbonGenerated: false,
    carbonSold: false,
    carbonAvailable: false,
    blockchainAddress: false,
    map: false,
  });

  if (!project) {
    return (
      <div className="project-detail-page">
        <Header />
        <div className="project-not-found">
          <h2>Project Not Found</h2>
          <button onClick={() => navigate("/projects")}>
            Back to Projects
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  const handleCreditChange = (increment) => {
    setCarbonCredits(Math.max(1, carbonCredits + increment));
  };

  const toggleSection = (sectionKey) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };

  const totalPrice = (parseFloat(project.price) * carbonCredits).toFixed(2);

  // Calculate dynamic values based on project data
  const availableCredits = parseInt(
    project.carbonCreditsAvailable?.replace(/,/g, "") || "0",
  );
  const generatedCredits = parseInt(
    project.carbonCreditsGenerated?.replace(/,/g, "") || "0",
  );
  const soldCredits = parseInt(
    project.carbonCreditsSold?.replace(/,/g, "") || "0",
  );

  // Format numbers with commas
  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  // Debug: Log the hero image path
  console.log("Hero image path:", project.heroImage || project.image);

  return (
    <div className="project-detail-page">
      <Header />

      {/* Hero Section */}
      <div
        className="project-hero"
        style={{
          backgroundImage: `url(${project.heroImage || project.image})`,
          backgroundColor: "#f0f0f0", // Fallback color to see if the div is there
        }}
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="project-title-detail">{project.title}</h1>
            <div className="project-meta">
              <div className="meta-item">
                <span className="meta-label">Project Type:</span>
                <span className="meta-value">
                  {project.projectType || "Nature Based"}
                </span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Status:</span>
                <span className="meta-value verified">
                  <img
                    src="/verified.svg"
                    alt="Verified"
                    className="verified-icon"
                  />
                  Verified
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="project-content">
        <div className="content-left">
          {/* Description Section */}
          <div className="content-section">
            <div
              className="section-header"
              onClick={() => toggleSection("description")}
            >
              <h3>Description:</h3>
              <span
                className={`chevron ${expandedSections.description ? "expanded" : ""}`}
              >
                ▼
              </span>
            </div>
            {expandedSections.description && (
              <div className="section-content">
                <p>{project.description}</p>
                {project.detailedDescription &&
                  project.detailedDescription.length > 0 && (
                    <div className="detailed-description">
                      {project.detailedDescription.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                  )}
              </div>
            )}
          </div>

          {/* PCS Registry Link */}
          <div className="content-section">
            <div
              className="section-header"
              onClick={() => toggleSection("pcsRegistry")}
            >
              <h3>PCS Registry Link:</h3>
              <span
                className={`chevron ${expandedSections.pcsRegistry ? "expanded" : ""}`}
              >
                ▼
              </span>
            </div>
            {expandedSections.pcsRegistry && (
              <div className="section-content">
                {project.pcsRegistryLink ? (
                  <a
                    href={project.pcsRegistryLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.pcsRegistryLink}
                  </a>
                ) : (
                  <p>Registry link will be available soon</p>
                )}
              </div>
            )}
          </div>

          {/* Carbon Credits Generated */}
          <div className="content-section">
            <div
              className="section-header"
              onClick={() => toggleSection("carbonGenerated")}
            >
              <h3>Carbon Credits Generated t/CO2e:</h3>
              <span
                className={`chevron ${expandedSections.carbonGenerated ? "expanded" : ""}`}
              >
                ▼
              </span>
            </div>
            {expandedSections.carbonGenerated && (
              <div className="section-content">
                <div className="carbon-credits-display">
                  <span className="credits-number">
                    {formatNumber(generatedCredits)}
                  </span>
                </div>
                <p>Total carbon credits generated by this project</p>
              </div>
            )}
          </div>

          {/* Carbon Credits Sold */}
          <div className="content-section">
            <div
              className="section-header"
              onClick={() => toggleSection("carbonSold")}
            >
              <h3>Carbon Credits Sold:</h3>
              <span
                className={`chevron ${expandedSections.carbonSold ? "expanded" : ""}`}
              >
                ▼
              </span>
            </div>
            {expandedSections.carbonSold && (
              <div className="section-content">
                <div className="carbon-credits-display">
                  <span className="credits-number">
                    {formatNumber(soldCredits)}
                  </span>
                </div>
                <p>Carbon credits sold to date</p>
              </div>
            )}
          </div>

          {/* Carbon Credits Available */}
          <div className="content-section">
            <div
              className="section-header"
              onClick={() => toggleSection("carbonAvailable")}
            >
              <h3>Carbon Credits Available t/CO2e:</h3>
              <span
                className={`chevron ${expandedSections.carbonAvailable ? "expanded" : ""}`}
              >
                ▼
              </span>
            </div>
            {expandedSections.carbonAvailable && (
              <div className="section-content">
                <div className="carbon-credits-display">
                  <span className="credits-number">
                    {formatNumber(availableCredits)}
                  </span>
                </div>
                <p>Carbon credits currently available for purchase</p>
              </div>
            )}
          </div>

          {/* Blockchain Address */}
          <div className="content-section">
            <div
              className="section-header"
              onClick={() => toggleSection("blockchainAddress")}
            >
              <h3>Project Blockchain Address:</h3>
              <span
                className={`chevron ${expandedSections.blockchainAddress ? "expanded" : ""}`}
              >
                ▼
              </span>
            </div>
            {expandedSections.blockchainAddress && (
              <div className="section-content">
                <div className="blockchain-address">
                  <code>{project.blockchainAddress}</code>
                  <button
                    className="copy-button"
                    onClick={() =>
                      navigator.clipboard.writeText(project.blockchainAddress)
                    }
                    title="Copy to clipboard"
                  >
                    Copy
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Map Section */}
          <div className="content-section">
            <div
              className="section-header"
              onClick={() => toggleSection("map")}
            >
              <h3>Map:</h3>
              <span
                className={`chevron ${expandedSections.map ? "expanded" : ""}`}
              >
                ▼
              </span>
            </div>
            {expandedSections.map && (
              <div className="section-content">
                <MapComponent
                  location={project.location}
                  coordinates={project.coordinates}
                  projectType={project.projectType}
                  category={project.category}
                  title={project.title}
                />
              </div>
            )}
          </div>
        </div>

        {/* Purchase Panel */}
        <div className="content-right">
          <div className="purchase-panel">
            <div className="price-section">
              <div className="price-item">
                <span className="price-label">Price per t/CO2e</span>
                <span className="price-value">{project.price}.00 USDC</span>
              </div>
            </div>

            <div className="quantity-section">
              <span className="quantity-label">Number of Carbon Credits</span>
              <div className="quantity-controls">
                <button
                  className="quantity-btn"
                  onClick={() => handleCreditChange(-1)}
                  disabled={carbonCredits <= 1}
                >
                  -
                </button>
                <span className="quantity-value">{carbonCredits}</span>
                <button
                  className="quantity-btn"
                  onClick={() => handleCreditChange(1)}
                  disabled={carbonCredits >= availableCredits}
                >
                  +
                </button>
              </div>
              <div className="availability-info">
                <small>
                  {formatNumber(availableCredits)} credits available
                </small>
              </div>
            </div>

            <div className="total-section">
              <div className="total-item">
                <span className="total-label">Price of Carbon Credits</span>
                <span className="total-value">${totalPrice}</span>
              </div>
            </div>

            <button className="buy-button">Sign in to Buy</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ProjectDetailPage;
