import PageLayout from "../components/ui/PageLayout.jsx";

function AboutPage({ user, onLoginClick, onSignupClick, onLogoutClick }) {
  return (
    <PageLayout
      title={
        <>
          About <span className="carbon-text">SavePlanetEarth</span>
        </>
      }
      subtitle="Leading the Fight Against Climate Change"
      tagline="Our Mission"
      description="We are dedicated to making carbon offsetting accessible, transparent, and impactful. Through blockchain technology and verified projects, we connect individuals and businesses with meaningful climate action opportunities worldwide."
      backgroundImage="/bg-hero-20767579.png"
      className="about-page"
      user={user}
      onLoginClick={onLoginClick}
      onSignupClick={onSignupClick}
      onLogoutClick={onLogoutClick}
    >
      {/* You can add more content sections here */}
      <section
        style={{
          padding: "80px 2rem",
          textAlign: "center",
          backgroundColor: "#f9f9f9",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              color: "#015404",
              marginBottom: "2rem",
            }}
          >
            Our Impact
          </h2>
          <p
            style={{ fontSize: "1.2rem", color: "#383751", lineHeight: "1.6" }}
          >
            Since our founding, we've facilitated the offset of over 1 million
            tons of CO2 through verified projects across 25 countries. Our
            platform has enabled thousands of individuals and businesses to take
            meaningful climate action.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}

export default AboutPage;
