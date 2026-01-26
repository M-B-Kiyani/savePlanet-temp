import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header, Hero, Footer, ProjectCard, ProjectFilter } from "../components/ui/index.js";
import { allProjects } from "../data/projects.js";
import "./ProjectsPage.css";

function ProjectsPage() {
  const navigate = useNavigate();
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
    setSelectedFilters(prev => 
      prev.includes(filterType) 
        ? prev.filter(f => f !== filterType)
        : [...prev, filterType]
    );
  };

  const filteredProjects = selectedFilters.length === 0 
    ? allProjects 
    : allProjects.filter((project) => {
        if (selectedFilters.includes("Nature Based") &&
          (project.category === "reforestation" ||
           project.category === "forest-conservation" ||
           project.category === "ocean-conservation")) {
          return true;
        }

        if (selectedFilters.includes("Energy Based") &&
          project.category === "renewable-energy") {
          return true;
        }

        return false;
      });

  const handleProjectClick = (project) => {
    console.log("Project clicked:", project);
    // Add project details navigation logic here
  };

  const filterOptions = ["Nature Based", "Energy Based"];

  return (
    <div className="projects-page">
      <Header
        onLoginClick={handleLoginClick}
        onSignupClick={handleSignupClick}
        onMenuClick={handleMenuClick}
      />

      <Hero
        title={
          <>
            <span className="verified-text">Verified</span> Carbon Projects
          </>
        }
        subtitle="LET'S PAVE THE PATH FOR A CLEANER, BRIGHTER AND SUSTAINABLE FUTURE."
        tagline="START YOUR CARBON OFFSET JOURNEY TODAY!"
        showButtons={false}
        className="projects-hero"
      />

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
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onClick={() => handleProjectClick(project)}
                  />
                ))}
              </div>
            </main>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ProjectsPage;