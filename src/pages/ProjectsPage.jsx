import ProjectCard from "../components/ui/ProjectCard.jsx";
import ProjectFilter from "../components/ui/ProjectFilter.jsx";
import { allProjects } from "../data/projects.js";
import { useProjectFilter } from "../hooks/useProjectFilter.js";
import PageLayout from "../components/ui/PageLayout.jsx";
import "./ProjectsPage.css";

function ProjectsPage({ user, onLoginClick, onSignupClick, onLogoutClick }) {
  const { selectedFilters, filteredProjects, handleFilterChange } =
    useProjectFilter(allProjects);

  const filterOptions = ["Nature Based", "Energy Based", "Waste Management"];

  return (
    <PageLayout
      title={
        <>
          <span className="verified-text">Verified</span> Carbon Projects
        </>
      }
      subtitle="LET'S PAVE THE PATH FOR A CLEANER, BRIGHTER AND SUSTAINABLE FUTURE."
      tagline="START YOUR CARBON OFFSET JOURNEY TODAY!"
      showButtons={false}
      className="projects-page"
      heroClassName="projects-hero"
      user={user}
      onLoginClick={onLoginClick}
      onSignupClick={onSignupClick}
      onLogoutClick={onLogoutClick}
    >
      <section className="projects-content">
        <div className="container">
          <div className="projects-layout">
            <aside className="projects-sidebar">
              <ProjectFilter
                filters={filterOptions}
                selectedFilters={selectedFilters}
                onFilterChange={handleFilterChange}
              />
            </aside>

            <main className="projects-main">
              <div className="projects-header">
                <h2 className="section-title">Verified Carbon Projects</h2>
              </div>

              <div className="projects-grid">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </main>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

export default ProjectsPage;
