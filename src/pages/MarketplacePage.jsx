import { ProjectGrid, Header, Footer } from "../components/ui/index.js";
import { allProjects } from "../data/projects.js";

function MarketplacePage() {
  const handleProjectClick = (project) => {
    console.log("Marketplace project clicked:", project);
    // Navigate to project details page
  };

  const handlePurchaseClick = () => {
    console.log("Purchase from marketplace clicked");
    // Handle purchase flow
  };

  const handleInvestClick = () => {
    console.log("Invest from marketplace clicked");
    // Handle investment flow
  };

  const handleLoginClick = () => {
    console.log("Login clicked from marketplace");
  };

  const handleSignupClick = () => {
    console.log("Signup clicked from marketplace");
  };

  const handleMenuClick = () => {
    console.log("Menu clicked from marketplace");
  };

  return (
    <div className="marketplace-page">
      <Header
        onLoginClick={handleLoginClick}
        onSignupClick={handleSignupClick}
        onMenuClick={handleMenuClick}
      />
      <ProjectGrid
        projects={allProjects}
        title={
          <>
            Carbon Credit <span className="highlight">Marketplace</span>
          </>
        }
        subtitle="Explore our comprehensive collection of verified carbon offset projects. From renewable energy to reforestation, find the perfect projects to match your sustainability goals."
        onProjectClick={handleProjectClick}
        onPurchaseClick={handlePurchaseClick}
        onInvestClick={handleInvestClick}
      />
      <Footer />
    </div>
  );
}

export default MarketplacePage;
