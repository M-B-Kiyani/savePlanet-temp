import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";

function PageLayout({
  children,
  title,
  subtitle,
  description,
  tagline,
  backgroundImage,
  showHero = true,
  showButtons = true,
  heroClassName = "",
  className = "",
  user,
  onLoginClick,
  onSignupClick,
  onLogoutClick,
}) {
  return (
    <div className={`page-layout ${className}`}>
      <Header
        user={user}
        onLoginClick={onLoginClick}
        onSignupClick={onSignupClick}
        onLogoutClick={onLogoutClick}
      />

      {showHero && (
        <Hero
          title={title}
          subtitle={subtitle}
          description={description}
          tagline={tagline}
          backgroundImage={backgroundImage}
          showButtons={showButtons}
          className={heroClassName}
        />
      )}

      <main className="page-content">{children}</main>

      <Footer />
    </div>
  );
}

export default PageLayout;
