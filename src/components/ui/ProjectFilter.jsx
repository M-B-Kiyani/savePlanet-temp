import "./ProjectFilter.css";

function ProjectFilter({
  title = "Project Type:",
  filters = [],
  selectedFilters = [],
  onFilterChange,
  className = "",
}) {
  const handleFilterToggle = (filterType) => {
    if (onFilterChange) {
      onFilterChange(filterType);
    }
  };

  return (
    <div className={`project-filter ${className}`}>
      <h3 className="filter-title">{title}</h3>
      <div className="filter-options">
        {filters.map((filter) => (
          <label key={filter} className="filter-option">
            <input
              type="checkbox"
              checked={selectedFilters.includes(filter)}
              onChange={() => handleFilterToggle(filter)}
            />
            <span className="checkmark"></span>
            {filter}
          </label>
        ))}
      </div>
    </div>
  );
}

export default ProjectFilter;
