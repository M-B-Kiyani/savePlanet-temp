import { useMemo } from "react";
import {
  allProjects,
  featuredProjects,
  getProjectsByCategory,
  getProjectById,
} from "../data/projects";

// Custom hook for project data management
export const useProjects = () => {
  // Convert projects to investment format for InvestPage
  const investmentProjects = useMemo(() => {
    return allProjects.map((project) => ({
      id: project.id,
      title: project.title,
      image: project.image,
      price: project.price,
      currency: project.currency,
      sdgIcon: project.sdgIcon,
      type:
        project.projectType === "Renewable Energy"
          ? "Energy Based"
          : project.projectType === "Nature Based"
            ? "Nature Based"
            : "Waste Management",
      category: project.category,
      location: project.location,
      description: project.description,
    }));
  }, []);

  // Get projects by filter type
  const getProjectsByFilter = (filterType) => {
    switch (filterType) {
      case "Nature Based":
        return allProjects.filter(
          (project) =>
            project.category === "reforestation" ||
            project.category === "forest-conservation" ||
            project.category === "ocean-conservation",
        );
      case "Energy Based":
        return allProjects.filter(
          (project) => project.category === "renewable-energy",
        );
      case "Waste Management":
        return allProjects.filter(
          (project) => project.category === "waste-management",
        );
      default:
        return allProjects;
    }
  };

  return {
    allProjects,
    featuredProjects,
    investmentProjects,
    getProjectsByCategory,
    getProjectById,
    getProjectsByFilter,
  };
};

export default useProjects;
