import "./About.css";
import { useEffect, useRef } from "react";

function About() {
  const climateRef = useRef(null);
  const lineRef = useRef(null);
  const stepRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!climateRef.current) return;

      const rect = climateRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how much of the section is visible
      const sectionTop = rect.top;
      const sectionHeight = rect.height;

      // Keep same logic for both mobile and desktop
      const startPoint = windowHeight - 150;
      const endPoint = -sectionHeight + 300;

      if (sectionTop <= startPoint && sectionTop >= endPoint) {
        // Calculate progress (0 to 1) with smoother curve
        let scrollProgress = Math.min(
          Math.max((startPoint - sectionTop) / (startPoint - endPoint), 0),
          1,
        );

        // Apply easing for more attractive animation
        scrollProgress =
          scrollProgress * scrollProgress * (3 - 2 * scrollProgress); // Smooth step function

        // Define progress thresholds for each step (more attractive timing)
        const progressThresholds = [0.0, 0.15, 0.35, 0.55, 0.75, 0.95];

        // Update line progress
        if (lineRef.current) {
          lineRef.current.style.setProperty("--line-scale", scrollProgress);
        }

        // Animate step dots based on progress thresholds
        stepRefs.current.forEach((stepDot, index) => {
          if (stepDot) {
            const stepThreshold = progressThresholds[index];
            const isActive = scrollProgress >= stepThreshold;

            if (isActive) {
              stepDot.classList.add("active");
            } else {
              stepDot.classList.remove("active");
            }
          }
        });

        // Ensure first step is always active when any progress is made
        if (scrollProgress > 0 && stepRefs.current[0]) {
          stepRefs.current[0].classList.add("active");
        }
      } else {
        // Reset animation when section is out of view
        if (lineRef.current) {
          lineRef.current.style.setProperty("--line-scale", 0);
        }
        stepRefs.current.forEach((stepDot) => {
          if (stepDot) {
            stepDot.classList.remove("active");
          }
        });
      }
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", throttledScroll);
    };
  }, []);

  return (
    <section id="about" className="about">
      <div className="container">
        {/* NFT Investment Section */}
        <div className="invest-nft-section">
          <div className="nft-content">
            <div className="nft-text">
              <h2>
                <span className="highlight-orange">Why Invest In</span>{" "}
                <span className="highlight-green">
                  Our NFTs For Climate Action
                </span>
              </h2>

              {/* <div className="nft-benefits"> */}
              <div className="benefits-column">
                <ul>
                  <li>Carbon Neutrality</li>
                  <li>Further Climate Solutions</li>
                  <li>Unique Ownership</li>
                  <li>Return on Investment</li>
                  <li>Gifts and Inheritance</li>
                  <li>Support Innovations</li>
                </ul>
              </div>
              {/* </div> */}

              <p className="nft-description">
                By purchasing NFTs for climate action, you invest in assets;
                become a part of solution to one of the most significant
                challenges facing our planet.
              </p>
            </div>

            <div className="nft-image">
              <img src="/invest-NFT.png" alt="NFT Investment" />
            </div>
          </div>
        </div>

        {/* Invest in Climate Action Projects Section */}
        <div className="invest-climate-section" ref={climateRef}>
          <div className="climate-content">
            <div className="climate-header">
              <h2>
                <span className="highlight-orange">Invest In Climate</span>{" "}
                <span className="highlight-green">Action Projects</span>
              </h2>
              <p className="climate-subtitle">
                Once purchase of the investment NFT is made, following steps
                occur:
              </p>
            </div>

            <div className="climate-main">
              <div className="climate-image">
                <img src="/invest-climate.png" alt="Climate Action Projects" />
              </div>

              <div className="climate-steps">
                <div className="steps-container">
                  <div className="connecting-line" ref={lineRef}></div>

                  <div className="step-item">
                    <div className="step-number">
                      <span
                        className="step-dot"
                        ref={(el) => (stepRefs.current[0] = el)}
                      ></span>
                    </div>
                    <div className="step-content">
                      <span className="step-label">Step 1</span>
                      <h3>Connect to Your Wallet</h3>
                    </div>
                  </div>

                  <div className="step-item">
                    <div className="step-number">
                      <span
                        className="step-dot"
                        ref={(el) => (stepRefs.current[1] = el)}
                      ></span>
                    </div>
                    <div className="step-content">
                      <span className="step-label">Step 2</span>
                      <h3>Transfer of the NFT</h3>
                    </div>
                  </div>

                  <div className="step-item">
                    <div className="step-number">
                      <span
                        className="step-dot"
                        ref={(el) => (stepRefs.current[2] = el)}
                      ></span>
                    </div>
                    <div className="step-content">
                      <span className="step-label">Step 3</span>
                      <h3>Ownership Confirmation</h3>
                    </div>
                  </div>

                  <div className="step-item">
                    <div className="step-number">
                      <span
                        className="step-dot"
                        ref={(el) => (stepRefs.current[3] = el)}
                      ></span>
                    </div>
                    <div className="step-content">
                      <span className="step-label">Step 4</span>
                      <h3>Follow Up Communications</h3>
                    </div>
                  </div>

                  <div className="step-item">
                    <div className="step-number">
                      <span
                        className="step-dot"
                        ref={(el) => (stepRefs.current[4] = el)}
                      ></span>
                    </div>
                    <div className="step-content">
                      <span className="step-label">Step 5</span>
                      <h3>Receive Earnings and Updates</h3>
                    </div>
                  </div>

                  <div className="step-item">
                    <div className="step-number">
                      <span
                        className="step-dot"
                        ref={(el) => (stepRefs.current[5] = el)}
                      ></span>
                    </div>
                    <div className="step-content">
                      <span className="step-label">Step 6</span>
                      <h3>Community Participation</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
