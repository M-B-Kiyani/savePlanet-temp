import { useNavigate } from "react-router-dom";
import "./ProjectCard.css";

function ProjectCard({ project, onClick }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate(`/projects/${project.id}`);
    }
  };

  return (
    <div className="project-card" onClick={handleClick}>
      <div className="project-image-wrapper">
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
        />
      </div>
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-id">{project.id}</p>
        <div className="project-footer">
          <div className="project-price">
            <span className="currency-icon">$</span>
            <span className="price-amount">{project.price}</span>
            <span className="currency">{project.currency}</span>
          </div>
          <div className="sdg-icon">
            <img src={project.sdgIcon} alt="SDG Goals" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
