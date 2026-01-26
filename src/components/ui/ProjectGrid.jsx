import ProjectCard from "./ProjectCard.jsx";
import "./ProjectGrid.css";

function ProjectGrid({
  projects,
  title,
  subtitle,
  showActions = true,
  onProjectClick,
  onPurchaseClick,
  onInvestClick,
}) {
  return (
    <section className="projects">
      <div className="container">
        {(title || subtitle) && (
          <div className="projects-header">
            {title && <h2 className="projects-title">{title}</h2>}
            {subtitle && <p className="projects-subtitle">{subtitle}</p>}
          </div>
        )}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id || index}
              project={project}
              onClick={() => onProjectClick?.(project)}
            />
          ))}
        </div>
        {showActions && (
          <div className="view-all">
            <button className="btn-primary" onClick={onPurchaseClick}>
              Purchase Carbon Credits
              <img src="/chevron.svg" alt="chevron" className="chevron-icon" />
            </button>
            <button className="btn-secondary" onClick={onInvestClick}>
              Invest in Climate Action
              <img src="/chevron.svg" alt="chevron" className="chevron-icon" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProjectGrid;
