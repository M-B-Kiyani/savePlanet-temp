import { useNavigate } from "react-router-dom";
import { ProjectGrid } from "./ui/index.js";
import { featuredProjects } from "../data/projects.js";

function CarbonProjects() {
  const navigate = useNavigate();

  const handleProjectClick = (project) => {
    console.log("Project clicked:", project);
    // Add navigation logic here
  };

  const handlePurchaseClick = () => {
    console.log("Purchase carbon credits clicked");
    navigate("/projects");
  };

  const handleInvestClick = () => {
    console.log("Invest in climate action clicked");
    navigate("/invest");
  };

  return (
    <ProjectGrid
      projects={featuredProjects}
      title={
        <>
          Recently <span className="highlight">Added Projects</span>
        </>
      }
      subtitle="Whether you're an individual aiming for a carbon-neutral lifestyle or a business striving for sustainability, our marketplace is your trusted partner. Dive in, explore our curated projects, and make a purchase that counts."
      onProjectClick={handleProjectClick}
      onPurchaseClick={handlePurchaseClick}
      onInvestClick={handleInvestClick}
    />
  );
}

export default CarbonProjects;
