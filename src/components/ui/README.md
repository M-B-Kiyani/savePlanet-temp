# Reusable UI Components

This folder contains reusable UI components that can be used across different pages in the application.

## Header

A reusable header component with customizable logo, navigation, and action buttons.

### Props

- `logoSrc` (string): Logo image source (default: "/logo.png")
- `logoText` (string): Logo text (default: "SavePlanetEarth")
- `logoHref` (string): Logo link href (default: "/")
- `showLogin` (boolean): Show login button (default: true)
- `showSignup` (boolean): Show signup button (default: true)
- `showMenu` (boolean): Show menu button (default: true)
- `loginText` (string): Login button text (default: "Login")
- `signupText` (string): Signup button text (default: "Sign Up")
- `onLoginClick` (function): Login button click handler
- `onSignupClick` (function): Signup button click handler
- `onMenuClick` (function): Menu button click handler
- `className` (string): Additional CSS classes
- `style` (object): Inline styles

### Usage

```jsx
import { Header } from "./ui/index.js";

<Header
  onLoginClick={() => console.log("Login clicked")}
  onSignupClick={() => console.log("Signup clicked")}
  onMenuClick={() => console.log("Menu clicked")}
/>;
```

## Hero

A reusable hero section component with customizable content and background.

### Props

- `title` (string|JSX): Hero title
- `subtitle` (string): Hero subtitle
- `tagline` (string): Hero tagline
- `description` (string): Hero description
- `primaryButtonText` (string): Primary button text (default: "Purchase Carbon Credits")
- `secondaryButtonText` (string): Secondary button text (default: "Invest in Climate Action")
- `onPrimaryClick` (function): Primary button click handler
- `onSecondaryClick` (function): Secondary button click handler
- `backgroundImage` (string): Background image URL (default: "/bg-hero-20767579.png")
- `showButtons` (boolean): Show action buttons (default: true)
- `className` (string): Additional CSS classes
- `style` (object): Inline styles
- `titleClassName` (string): Title CSS classes
- `contentClassName` (string): Content CSS classes

### Usage

```jsx
import { Hero } from "./ui/index.js";

<Hero
  title={
    <>
      Purchase <span className="carbon-text">Carbon Credits</span>
    </>
  }
  subtitle="Your Direct Path To A Greener Tomorrow"
  tagline="Empower Your Choices"
  description="Every day, our actions contribute to the global carbon footprint..."
  onPrimaryClick={() => console.log("Primary clicked")}
  onSecondaryClick={() => console.log("Secondary clicked")}
/>;
```

## Footer

A reusable footer component with customizable links, social media, and contact information.

### Props

- `logoSrc` (string): Logo image source (default: "/logo.png")
- `logoText` (string): Logo text (default: "SavePlanetEarth")
- `description` (string): Company description
- `socialLinks` (object): Social media links
- `siteMapLinks` (array): Site navigation links
- `locations` (array): Company locations
- `contactEmail` (string): Contact email
- `copyrightText` (string): Copyright text
- `legalLinks` (array): Legal page links
- `className` (string): Additional CSS classes
- `style` (object): Inline styles

### Usage

```jsx
import { Footer } from "./ui/index.js";

<Footer
  socialLinks={{
    facebook: "https://facebook.com/company",
    twitter: "https://twitter.com/company",
  }}
  siteMapLinks={[
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
  ]}
/>;
```

## ProjectCard

A reusable card component for displaying individual carbon credit projects.

### Props

- `project` (object): Project data containing:
  - `id`: Unique project identifier
  - `title`: Project title
  - `image`: Project image URL
  - `price`: Project price
  - `currency`: Currency type (e.g., "USDC")
  - `sdgIcon`: SDG goals icon URL
- `onClick` (function): Callback function when card is clicked

### Usage

```jsx
import { ProjectCard } from "./ui/index.js";

const project = {
  id: "0001-IICA-SL-RTS",
  title: "100 kW Rooftop Solar Project",
  image: "/solar.png",
  price: "250",
  currency: "USDC",
  sdgIcon: "/rainbow.svg",
};

<ProjectCard
  project={project}
  onClick={(project) => console.log("Clicked:", project)}
/>;
```

## ProjectGrid

A reusable grid component for displaying multiple project cards with optional header and action buttons.

### Props

- `projects` (array): Array of project objects
- `title` (string|JSX): Optional title for the grid section
- `subtitle` (string): Optional subtitle/description
- `showActions` (boolean): Whether to show action buttons (default: true)
- `onProjectClick` (function): Callback when a project card is clicked
- `onPurchaseClick` (function): Callback when purchase button is clicked
- `onInvestClick` (function): Callback when invest button is clicked

### Usage

```jsx
import { ProjectGrid } from "./ui/index.js";
import { featuredProjects } from "../data/projects.js";

<ProjectGrid
  projects={featuredProjects}
  title={
    <>
      Recently <span className="highlight">Added Projects</span>
    </>
  }
  subtitle="Explore our curated projects and make a purchase that counts."
  onProjectClick={(project) => console.log("Project clicked:", project)}
  onPurchaseClick={() => console.log("Purchase clicked")}
  onInvestClick={() => console.log("Invest clicked")}
/>;
```

### Without Actions

```jsx
<ProjectGrid
  projects={projects}
  title="Featured Projects"
  showActions={false}
  onProjectClick={handleProjectClick}
/>
```

## Styling

All components come with their own CSS files that handle responsive design and hover effects. The styling follows the existing design system with green (#015404) as the primary color.

## Data Structure

Projects should follow this structure:

```javascript
{
  id: "unique-project-id",
  title: "Project Title",
  image: "/path/to/image.png",
  price: "250",
  currency: "USDC",
  sdgIcon: "/path/to/sdg-icon.svg",
  // Optional additional fields
  category: "renewable-energy",
  location: "Location",
  description: "Project description"
}
```

## Component Customization

All components accept `className` and `style` props for additional customization:

```jsx
<Header
  className="custom-header"
  style={{ backgroundColor: 'blue' }}
/>

<Hero
  titleClassName="custom-title"
  contentClassName="custom-content"
/>
```
