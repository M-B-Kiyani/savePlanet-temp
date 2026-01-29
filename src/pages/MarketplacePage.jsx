import { ProjectGrid } from "../components/ui/index.js";
import { allProjects } from "../data/projects.js";
import PageLayout from "../components/ui/PageLayout.jsx";

function MarketplacePage({ user, onLoginClick, onSignupClick, onLogoutClick }) {
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

  return (
    <PageLayout
      title={
        <>
          Carbon Credit <span className="highlight">Marketplace</span>
        </>
      }
      subtitle="Explore our comprehensive collection of verified carbon offset projects. From renewable energy to reforestation, find the perfect projects to match your sustainability goals."
      showButtons={false}
      className="marketplace-page"
      user={user}
      onLoginClick={onLoginClick}
      onSignupClick={onSignupClick}
      onLogoutClick={onLogoutClick}
    >
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
    </PageLayout>
  );
}

export default MarketplacePage;
