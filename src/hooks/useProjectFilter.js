import { useState, useMemo } from "react";

// Custom hook for project filtering logic
export const useProjectFilter = (projects, categoryMapping = {}) => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterChange = (filterType) => {
    setSelectedFilters((prev) =>
      prev.includes(filterType)
        ? prev.filter((f) => f !== filterType)
        : [...prev, filterType],
    );
  };

  const filteredProjects = useMemo(() => {
    if (selectedFilters.length === 0) {
      return projects;
    }

    return projects.filter((project) => {
      // Nature Based projects
      if (selectedFilters.includes("Nature Based")) {
        if (
          project.category === "reforestation" ||
          project.category === "forest-conservation" ||
          project.category === "ocean-conservation"
        ) {
          return true;
        }
      }

      // Energy Based projects
      if (selectedFilters.includes("Energy Based")) {
        if (project.category === "renewable-energy") {
          return true;
        }
      }

      // Waste Management projects
      if (selectedFilters.includes("Waste Management")) {
        if (project.category === "waste-management") {
          return true;
        }
      }

      // Custom category mapping for specific pages
      for (const [filterName, categories] of Object.entries(categoryMapping)) {
        if (selectedFilters.includes(filterName)) {
          if (categories.includes(project.category)) {
            return true;
          }
        }
      }

      return false;
    });
  }, [projects, selectedFilters, categoryMapping]);

  const clearFilters = () => {
    setSelectedFilters([]);
  };

  return {
    selectedFilters,
    filteredProjects,
    handleFilterChange,
    clearFilters,
  };
};

export default useProjectFilter;
