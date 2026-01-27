// Sample project data - you can expand this as needed
//
// HERO IMAGES GUIDE:
// Replace the heroImage paths with your actual image files:
// - Place your hero images in the /public folder
// - Use descriptive names like: /hero-solar-rooftop.jpg, /hero-amazon-rainforest.jpg
// - Recommended size: 1200x400px or similar wide aspect ratio
// - Supported formats: .jpg, .png, .webp
//
// Current hero image placeholders to replace:
// - /hero-solar-rooftop.jpg (for solar projects)
// - /hero-tree-plantation.jpg (for tree plantation projects)
// - /hero-amazon-rainforest.jpg (for Amazon project)
// - /hero-wind-farm-texas.jpg (for wind farm project)
// - /hero-ocean-cleanup.jpg (for ocean cleanup project)
// - /hero-rainforest-restoration.jpg (for rainforest restoration)
// - /hero-solar-india.jpg (for India solar project)
// - /hero-mangrove-restoration.jpg (for mangrove project)

export const featuredProjects = [
  {
    id: "0001-IICA-SL-RTS",
    title: "100 kW Rooftop Solar Project",
    image: "/solar.png",
    heroImage: "/solarcard.png", // Add your hero image here
    price: "250",
    currency: "USDC",
    sdgIcon: "/rainbow.svg",
    category: "renewable-energy",
    location: "California, USA",
    coordinates: { lat: 36.7783, lng: -119.4179 }, // California coordinates
    projectType: "Renewable Energy",
    description:
      "A state-of-the-art rooftop solar installation providing clean energy to local communities.",
    detailedDescription: [
      "This innovative rooftop solar project represents a significant step forward in sustainable energy generation. Located across multiple commercial buildings in California, the installation features cutting-edge photovoltaic panels with advanced tracking systems.",
      "The project not only generates clean electricity but also serves as a model for urban renewable energy integration. It demonstrates how commercial spaces can be transformed into productive energy assets while reducing carbon footprints.",
      "Community benefits include reduced energy costs for local businesses, job creation in the green energy sector, and educational opportunities for students and professionals interested in renewable energy technologies.",
    ],
    pcsRegistryLink: "https://registry.pcs.org/projects/0001-IICA-SL-RTS",
    carbonCreditsGenerated: "45,000",
    carbonCreditsSold: "32,500",
    carbonCreditsAvailable: "12,500",
    blockchainAddress: "0x1a2b3c4d5e6f7890abcdef1234567890abcdef12",
  },
  {
    id: "0001-IICA-SL-MLT",
    title: "10-Acre Multilayer Tree Plantation",
    image: "/tree.png",
    heroImage: "/10acre.jpeg", // Add your hero image here
    price: "350",
    currency: "USDC",
    sdgIcon: "/rainbow.svg",
    category: "reforestation",
    location: "Costa Rica",
    coordinates: { lat: 9.7489, lng: -83.7534 }, // Costa Rica coordinates
    projectType: "Nature Based",
    description:
      "Sustainable multilayer tree plantation supporting biodiversity and carbon sequestration.",
    detailedDescription: [
      "This comprehensive reforestation project spans 10 acres of previously degraded land in Costa Rica's tropical region. The multilayer approach mimics natural forest ecosystems, creating diverse habitats for wildlife while maximizing carbon capture.",
      "The plantation includes fast-growing canopy trees, understory species, and ground-level vegetation, creating a complex ecosystem that supports local biodiversity. Native species are prioritized to ensure ecological compatibility and long-term sustainability.",
      "Local communities benefit through employment opportunities in planting, maintenance, and monitoring activities. The project also provides educational programs about sustainable forestry practices and climate change mitigation.",
    ],
    pcsRegistryLink: "https://registry.pcs.org/projects/0001-IICA-SL-MLT",
    carbonCreditsGenerated: "28,500",
    carbonCreditsSold: "16,200",
    carbonCreditsAvailable: "12,300",
    blockchainAddress: "0x2b3c4d5e6f7890ab1234567890abcdef12345678",
  },
  {
    id: "PCS-2023-0001-SANZ-0001",
    title: "Tokenize Amazon Project",
    image: "/amazon.png",
    heroImage: "/amazon-tokenizer.png", // Add your hero image here
    price: "24",
    currency: "USDC",
    sdgIcon: "/rainbow.svg",
    category: "forest-conservation",
    location: "Amazon Basin, Brazil",
    coordinates: { lat: -3.4653, lng: -62.2159 }, // Amazon Basin coordinates
    projectType: "Nature Based",
    description:
      "Protecting and preserving critical Amazon rainforest through tokenized conservation efforts.",
    detailedDescription: [
      "The Tokenize Amazon Project represents a groundbreaking approach to rainforest conservation, utilizing blockchain technology to create transparent and verifiable protection of critical Amazon ecosystem areas.",
      "This project covers 50,000 hectares of pristine rainforest, home to countless species of flora and fauna. Through advanced monitoring systems including satellite imagery and IoT sensors, we ensure continuous protection and verification of conservation efforts.",
      "Indigenous communities are integral partners in this project, serving as forest guardians while receiving fair compensation for their stewardship. The project supports traditional ways of life while providing economic incentives for conservation.",
      "Carbon credits generated through avoided deforestation are tokenized on the blockchain, ensuring transparency and traceability for buyers while providing sustainable funding for ongoing conservation efforts.",
    ],
    pcsRegistryLink:
      "https://registry.pcs.org/projects/PCS-2023-0001-SANZ-0001",
    carbonCreditsGenerated: "1,720,672",
    carbonCreditsSold: "3,008",
    carbonCreditsAvailable: "1,717,664",
    blockchainAddress: "0x3c4d5e6f7890ab1234567890abcdef1234567890",
  },
];

export const allProjects = [
  ...featuredProjects,
  {
    id: "0002-WIND-FARM-TX",
    title: "500 MW Wind Farm Texas",
    image: "/solar.png",
    heroImage: "/hero-wind-farm-texas.jpg", // Add your hero image here
    price: "180",
    currency: "USDC",
    sdgIcon: "/rainbow.svg",
    category: "renewable-energy",
    location: "Texas, USA",
    projectType: "Renewable Energy",
    description:
      "Large-scale wind energy project generating clean electricity for thousands of homes.",
    detailedDescription: [
      "This massive wind farm installation spans across 25,000 acres of Texas plains, featuring 200 state-of-the-art wind turbines capable of generating 500 MW of clean electricity.",
      "The project provides renewable energy to over 150,000 homes while creating significant economic benefits for local communities through job creation and land lease payments to farmers.",
      "Advanced grid integration technology ensures reliable power delivery while minimizing environmental impact through careful wildlife monitoring and habitat preservation measures.",
    ],
    pcsRegistryLink: "https://registry.pcs.org/projects/0002-WIND-FARM-TX",
    carbonCreditsGenerated: "45,000",
    carbonCreditsSold: "38,200",
    carbonCreditsAvailable: "6,800",
    blockchainAddress: "0x4d5e6f7890ab1234567890abcdef1234567890ab",
  },
  {
    id: "0003-OCEAN-CLEANUP",
    title: "Ocean Plastic Cleanup Initiative",
    image: "/tree.png",
    heroImage: "/amazon-tokenizer.png", // Add your hero image here
    price: "420",
    currency: "USDC",
    sdgIcon: "/rainbow.svg",
    category: "ocean-conservation",
    location: "Pacific Ocean",
    projectType: "Ocean Conservation",
    description:
      "Innovative technology removing plastic waste from ocean waters.",
    detailedDescription: [
      "This groundbreaking ocean cleanup project deploys advanced collection systems to remove plastic waste from the Great Pacific Garbage Patch and other polluted ocean areas.",
      "Using autonomous collection vessels and innovative filtration technology, the project removes thousands of tons of plastic waste while protecting marine life through careful design and monitoring.",
      "Collected plastic is processed and recycled into useful products, creating a circular economy approach to ocean cleanup while generating carbon credits through waste diversion and processing.",
    ],
    pcsRegistryLink: "https://registry.pcs.org/projects/0003-OCEAN-CLEANUP",
    carbonCreditsGenerated: "12,000",
    carbonCreditsSold: "9,500",
    carbonCreditsAvailable: "2,500",
    blockchainAddress: "0x5e6f7890ab1234567890abcdef1234567890abcd",
  },
  {
    id: "0004-FOREST-RESTORE",
    title: "Rainforest Restoration Brazil",
    image: "/amazon.png",
    heroImage: "/10acre.jpeg", // Add your hero image here
    price: "95",
    currency: "USDC",
    sdgIcon: "/rainbow.svg",
    category: "reforestation",
    location: "Atlantic Forest, Brazil",
    projectType: "Nature Based",
    description: "Restoring degraded rainforest areas with native species.",
    detailedDescription: [
      "This restoration project focuses on rehabilitating 5,000 hectares of degraded Atlantic Forest, one of the world's most threatened biomes with only 12% of original forest remaining.",
      "Using advanced ecological restoration techniques, the project plants native tree species while restoring natural water cycles and soil health through sustainable practices.",
      "Local communities are employed as forest restoration specialists, receiving training in sustainable forestry practices while earning income from restoration activities and forest product harvesting.",
    ],
    pcsRegistryLink: "https://registry.pcs.org/projects/0004-FOREST-RESTORE",
    carbonCreditsGenerated: "28,000",
    carbonCreditsSold: "22,400",
    carbonCreditsAvailable: "5,600",
    blockchainAddress: "0x6f7890ab1234567890abcdef1234567890abcdef",
  },
  {
    id: "0005-SOLAR-INDIA",
    title: "Community Solar Project India",
    image: "/solar.png",
    heroImage: "/solarcard.png", // Add your hero image here
    price: "320",
    currency: "USDC",
    sdgIcon: "/rainbow.svg",
    category: "renewable-energy",
    location: "Rajasthan, India",
    projectType: "Renewable Energy",
    description: "Bringing clean solar energy to rural communities in India.",
    detailedDescription: [
      "This community-focused solar project installs distributed solar systems across 50 rural villages in Rajasthan, providing clean electricity access to over 25,000 people.",
      "The project combines large-scale solar installations with individual household systems, creating energy independence while reducing reliance on fossil fuels and improving quality of life.",
      "Local technicians are trained in solar system maintenance and repair, creating sustainable employment opportunities while ensuring long-term project success and community ownership.",
    ],
    pcsRegistryLink: "https://registry.pcs.org/projects/0005-SOLAR-INDIA",
    carbonCreditsGenerated: "18,500",
    carbonCreditsSold: "14,200",
    carbonCreditsAvailable: "4,300",
    blockchainAddress: "0x7890ab1234567890abcdef1234567890abcdef12",
  },
  {
    id: "0006-MANGROVE-RESTORE",
    title: "Mangrove Restoration Project",
    image: "/tree.png",
    heroImage: "/10acre.jpeg", // Add your hero image here
    price: "275",
    currency: "USDC",
    sdgIcon: "/rainbow.svg",
    category: "reforestation",
    location: "Philippines",
    projectType: "Nature Based",
    description:
      "Restoring coastal mangrove ecosystems for climate resilience.",
    detailedDescription: [
      "This coastal restoration project rehabilitates 2,000 hectares of degraded mangrove ecosystems across multiple islands in the Philippines, providing critical climate adaptation benefits.",
      "Mangroves serve as natural barriers against storm surges and sea-level rise while providing nursery habitats for marine species and supporting local fishing communities.",
      "The project employs local communities in planting and maintenance activities while providing training in sustainable aquaculture and eco-tourism to create alternative income sources.",
    ],
    pcsRegistryLink: "https://registry.pcs.org/projects/0006-MANGROVE-RESTORE",
    carbonCreditsGenerated: "22,000",
    carbonCreditsSold: "17,600",
    carbonCreditsAvailable: "4,400",
    blockchainAddress: "0x890ab1234567890abcdef1234567890abcdef123",
  },
];

export const getProjectsByCategory = (category) => {
  return allProjects.filter((project) => project.category === category);
};

export const getProjectById = (id) => {
  return allProjects.find((project) => project.id === id);
};
