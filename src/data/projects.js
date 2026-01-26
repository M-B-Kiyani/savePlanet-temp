// Sample project data - you can expand this as needed
export const featuredProjects = [
  {
    id: "0001-IICA-SL-RTS",
    title: "100 kW Rooftop Solar Project",
    image: "/solar.png",
    price: "250",
    currency: "USDC",
    sdgIcon: "/rainbow.svg",
    category: "renewable-energy",
    location: "California, USA",
    description:
      "A state-of-the-art rooftop solar installation providing clean energy to local communities.",
  },
  {
    id: "0001-IICA-SL-MLT",
    title: "10-Acre Multilayer Tree Plantation",
    image: "/tree.png",
    price: "350",
    currency: "USDC",
    sdgIcon: "/rainbow.svg",
    category: "reforestation",
    location: "Costa Rica",
    description:
      "Sustainable multilayer tree plantation supporting biodiversity and carbon sequestration.",
  },
  {
    id: "PCS-2023-0001-SANZ-0001",
    title: "Tokenize Amazon Project",
    image: "/amazon.png",
    price: "24",
    currency: "USDC",
    sdgIcon: "/rainbow.svg",
    category: "forest-conservation",
    location: "Amazon Basin, Brazil",
    description:
      "Protecting and preserving critical Amazon rainforest through tokenized conservation efforts.",
  },
];

export const allProjects = [
  ...featuredProjects,
  {
    id: "0002-WIND-FARM-TX",
    title: "500 MW Wind Farm Texas",
    image: "/solar.png",
    price: "180",
    currency: "USDC",
    sdgIcon: "/rainbow.svg",
    category: "renewable-energy",
    location: "Texas, USA",
    description:
      "Large-scale wind energy project generating clean electricity for thousands of homes.",
  },
  {
    id: "0003-OCEAN-CLEANUP",
    title: "Ocean Plastic Cleanup Initiative",
    image: "/tree.png",
    price: "420",
    currency: "USDC",
    sdgIcon: "/rainbow.svg",
    category: "ocean-conservation",
    location: "Pacific Ocean",
    description:
      "Innovative technology removing plastic waste from ocean waters.",
  },
  {
    id: "0004-FOREST-RESTORE",
    title: "Rainforest Restoration Brazil",
    image: "/amazon.png",
    price: "95",
    currency: "USDC",
    sdgIcon: "/rainbow.svg",
    category: "reforestation",
    location: "Atlantic Forest, Brazil",
    description: "Restoring degraded rainforest areas with native species.",
  },
  {
    id: "0005-SOLAR-INDIA",
    title: "Community Solar Project India",
    image: "/solar.png",
    price: "320",
    currency: "USDC",
    sdgIcon: "/rainbow.svg",
    category: "renewable-energy",
    location: "Rajasthan, India",
    description: "Bringing clean solar energy to rural communities in India.",
  },
  {
    id: "0006-MANGROVE-RESTORE",
    title: "Mangrove Restoration Project",
    image: "/tree.png",
    price: "275",
    currency: "USDC",
    sdgIcon: "/rainbow.svg",
    category: "reforestation",
    location: "Philippines",
    description:
      "Restoring coastal mangrove ecosystems for climate resilience.",
  },
];

export const getProjectsByCategory = (category) => {
  return allProjects.filter((project) => project.category === category);
};

export const getProjectById = (id) => {
  return allProjects.find((project) => project.id === id);
};
