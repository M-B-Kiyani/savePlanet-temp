import { Header, Footer } from "../components/ui/index.js";
import {
  Stats,
  Benefits,
  Educational,
  CTA,
  Contact,
  Incentives,
} from "../components/unused/index.js";

function ExampleUnusedComponentsPage() {
  const handleLoginClick = () => {
    console.log("Login clicked");
  };

  const handleSignupClick = () => {
    console.log("Signup clicked");
  };

  const handleMenuClick = () => {
    console.log("Menu clicked");
  };

  return (
    <div className="example-unused-page">
      <Header
        onLoginClick={handleLoginClick}
        onSignupClick={handleSignupClick}
        onMenuClick={handleMenuClick}
      />

      {/* Example usage of unused components */}
      <div style={{ padding: "80px 0" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h1
            style={{
              color: "#015404",
              fontSize: "2.5rem",
              marginBottom: "1rem",
            }}
          >
            Unused Components Showcase
          </h1>
          <p
            style={{
              color: "#383751",
              fontSize: "1.2rem",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            This page demonstrates all the components that were removed from
            HomePage but are available for future use.
          </p>
        </div>

        {/* Stats Component */}
        <Stats />

        {/* Benefits Component */}
        <Benefits />

        {/* Educational Component */}
        <Educational />

        {/* CTA Component */}
        <CTA />

        {/* Contact Component */}
        <Contact />

        {/* Incentives Component */}
        <Incentives />
      </div>

      <Footer />
    </div>
  );
}

export default ExampleUnusedComponentsPage;
