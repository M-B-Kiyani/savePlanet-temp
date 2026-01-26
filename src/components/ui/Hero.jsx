import "./Hero.css";

function Hero({
  title,
  subtitle,
  tagline,
  description,
  primaryButtonText = "Purchase Carbon Credits",
  secondaryButtonText = "Invest in Climate Action",
  onPrimaryClick,
  onSecondaryClick,
  backgroundImage = "/bg-hero-20767579.png",
  showButtons = true,
  className = "",
  style = {},
  titleClassName = "",
  contentClassName = "",
}) {
  const handlePrimaryClick = (e) => {
    if (onPrimaryClick) {
      e.preventDefault();
      onPrimaryClick();
    }
  };

  const handleSecondaryClick = (e) => {
    if (onSecondaryClick) {
      e.preventDefault();
      onSecondaryClick();
    }
  };

  const heroStyle = {
    backgroundImage: `url(${backgroundImage})`,
    ...style,
  };

  return (
    <section className={`hero ${className}`} style={heroStyle}>
      <div className="hero-container">
        <div className={`hero-content ${contentClassName}`}>
          {title && <h1 className={`hero-title ${titleClassName}`}>{title}</h1>}
          {subtitle && <h5 className="hero-subtitle">{subtitle}</h5>}
          {tagline && <p className="hero-tagline">{tagline}</p>}
          {description && <p className="hero-description">{description}</p>}
          {showButtons && (
            <div className="hero-buttons">
              <button className="primary-button" onClick={handlePrimaryClick}>
                {primaryButtonText}
                <img src="/chevron.svg" alt="chevron" />
              </button>
              <button
                className="secondary-button"
                onClick={handleSecondaryClick}
              >
                {secondaryButtonText}
                <img src="/chevron.svg" alt="chevron" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Hero;
