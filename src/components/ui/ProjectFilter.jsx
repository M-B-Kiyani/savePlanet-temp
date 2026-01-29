import { useState } from "react";
import { Filter } from "lucide-react";
import "./ProjectFilter.css";

function ProjectFilter({
  title = "Project Type:",
  filters = [],
  selectedFilters = [],
  onFilterChange,
  className = "",
}) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleFilterToggle = (filterType) => {
    if (onFilterChange) {
      onFilterChange(filterType);
    }
  };

  const toggleFilterVisibility = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const activeFiltersCount = selectedFilters.length;

  return (
    <div className={`project-filter ${className}`}>
      {/* Mobile Filter Toggle Button */}
      <button
        className="filter-toggle-btn"
        onClick={toggleFilterVisibility}
        aria-label={`${isFilterOpen ? "Hide" : "Show"} filters${activeFiltersCount > 0 ? ` (${activeFiltersCount} active)` : ""}`}
      >
        <Filter className="filter-icon" size={18} />
        {activeFiltersCount > 0 && (
          <span className="filter-count">{activeFiltersCount}</span>
        )}
        <span className={`filter-chevron ${isFilterOpen ? "open" : ""}`}>
          ▼
        </span>
      </button>

      {/* Filter Content */}
      <div className={`filter-content ${isFilterOpen ? "open" : ""}`}>
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
    </div>
  );
}

export default ProjectFilter;
