import { useState } from "react";
import {
  Header,
  Hero,
  Footer,
  ProjectCard,
  ProjectFilter,
} from "../components/ui/index.js";
import "./InvestPage.css";

function InvestPage() {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleLoginClick = () => {
    console.log("Login clicked");
  };

  const handleSignupClick = () => {
    console.log("Signup clicked");
  };

  const handleMenuClick = () => {
    console.log("Menu clicked");
  };

  const handleFilterChange = (filterType) => {
    setSelectedFilters((prev) =>
      prev.includes(filterType)
        ? prev.filter((f) => f !== filterType)
        : [...prev, filterType],
    );
  };

  const investmentProjects = [
    {
      id: "0001-IICA-SL-RTS",
      title: "100 kW Rooftop Solar Project",
      image: "/solar.png",
      price: "250",
      currency: "USDC",
      sdgIcon: "/rainbow.svg",
      type: "Energy Based",
    },
    {
      id: "0001-IICA-SL-MLT",
      title: "10-Acre Multilayer Tree Plantation",
      image: "/tree.png",
      price: "350",
      currency: "USDC",
      sdgIcon: "/rainbow.svg",
      type: "Nature Based",
    },
  ];

  const filteredProjects =
    selectedFilters.length === 0
      ? investmentProjects
      : investmentProjects.filter((project) =>
          selectedFilters.includes(project.type),
        );

  const handleProjectClick = (project) => {
    console.log("Investment project clicked:", project);
  };

  const filterOptions = ["Nature Based", "Energy Based", "Waste Management"];

  return (
    <div className="invest-page">
      <Header
        onLoginClick={handleLoginClick}
        onSignupClick={handleSignupClick}
        onMenuClick={handleMenuClick}
      />
      <Hero
        title="Invest In A Greener Tomorrow With NFTs"
        description="Unlock the Power of Digital Shares in Nature-Based Carbon Projects, Renewable Energy, E-Waste Management, and High-Impact UNSDG Initiatives."
        tagline="Drive Climate Action, Earn Yield, and Shape a Sustainable Future."
        backgroundImage="/bg-hero-20767579.png"
        showButtons={false}
        className="invest-hero"
      />

      <section className="invest-content">
        <div className="invest-container">
          <div className="invest-sidebar">
            <ProjectFilter
              filters={filterOptions}
              selectedFilters={selectedFilters}
              onFilterChange={handleFilterChange}
            />
          </div>

          <div className="invest-main">
            <h2 className="section-title">Invest in Climate Action Projects</h2>
            <div className="investment-grid">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => handleProjectClick(project)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default InvestPage;
