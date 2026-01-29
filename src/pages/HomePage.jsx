import { useNavigate } from "react-router-dom";
import { Header, Hero, Footer } from "../components/ui/index.js";
import CarbonProjects from "../components/CarbonProjects.jsx";
import Analytics from "../components/Analytics.jsx";
import Offset from "../components/Offset.jsx";
import Features from "../components/Features.jsx"; // How it Works
import About from "../components/About.jsx";
import "./HomePage.css";

function HomePage({ user, onLoginClick, onSignupClick, onLogoutClick }) {
  const navigate = useNavigate();

  const handlePrimaryClick = () => {
    console.log("Purchase Carbon Credits clicked");
    navigate("/projects");
  };

  const handleSecondaryClick = () => {
    console.log("Invest in Climate Action clicked");
    navigate("/invest");
  };

  return (
    <div className="home-page">
      <Header
        user={user}
        onLoginClick={onLoginClick}
        onSignupClick={onSignupClick}
        onLogoutClick={onLogoutClick}
      />
      <Hero
        title={
          <>
            <span className="purchase-text">Purchase</span>{" "}
            <span className="carbon-text">Carbon Credits</span>
          </>
        }
        subtitle="Your Direct Path To A Greener Tomorrow"
        tagline="Empower Your Choices"
        description="Every day, our actions contribute to the global carbon footprint. With a simple step, you can make a significant difference. By purchasing carbon credits, you directly support initiatives that reduce carbon emissions and promote a sustainable future."
        onPrimaryClick={handlePrimaryClick}
        onSecondaryClick={handleSecondaryClick}
      />
      <Features />
      <CarbonProjects />
      <Analytics />
      <Offset />
      <About />
      <Footer />
    </div>
  );
}

export default HomePage;
