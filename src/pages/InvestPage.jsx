import { ProjectCard, ProjectFilter } from "../components/ui/index.js";
import { useProjects } from "../hooks/useProjects.js";
import { useProjectFilter } from "../hooks/useProjectFilter.js";
import PageLayout from "../components/ui/PageLayout.jsx";
import "./InvestPage.css";

function InvestPage({ user, onLoginClick, onSignupClick, onLogoutClick }) {
  const { investmentProjects } = useProjects();
  const { selectedFilters, filteredProjects, handleFilterChange } =
    useProjectFilter(investmentProjects);

  const filterOptions = ["Nature Based", "Energy Based", "Waste Management"];

  return (
    <PageLayout
      title="Invest In A Greener Tomorrow With NFTs"
      description="Unlock the Power of Digital Shares in Nature-Based Carbon Projects, Renewable Energy, E-Waste Management, and High-Impact UNSDG Initiatives."
      tagline="Drive Climate Action, Earn Yield, and Shape a Sustainable Future."
      backgroundImage="/bg-hero-20767579.png"
      showButtons={false}
      className="invest-page"
      heroClassName="invest-hero"
      user={user}
      onLoginClick={onLoginClick}
      onSignupClick={onSignupClick}
      onLogoutClick={onLogoutClick}
    >
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
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

export default InvestPage;
