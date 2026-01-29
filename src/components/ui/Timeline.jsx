import { useEffect, useRef } from "react";
import "./Timeline.css";

const Timeline = ({
  steps = [],
  orientation = "vertical",
  animated = true,
  className = "",
  lineColor = "#4CAF50",
  activeDotColor = "#FFD700",
  dotSize = "25px",
  immediateLoad = false, // New prop to show timeline immediately on page load
}) => {
  const timelineRef = useRef(null);
  const lineRef = useRef(null);
  const stepRefs = useRef([]);

  useEffect(() => {
    if (!animated) {
      // For non-animated timelines, show all steps as active immediately
      stepRefs.current.forEach((stepDot) => {
        if (stepDot) {
          stepDot.classList.add("active");
        }
      });
      if (lineRef.current) {
        lineRef.current.style.setProperty("--line-scale", 1);
      }
      return;
    }

    // If immediateLoad is true, activate all steps immediately
    if (immediateLoad) {
      stepRefs.current.forEach((stepDot) => {
        if (stepDot) {
          stepDot.classList.add("active");
        }
      });
      if (lineRef.current) {
        lineRef.current.style.setProperty("--line-scale", 1);
      }
      return;
    }

    const handleScroll = () => {
      if (!timelineRef.current) return;

      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how much of the timeline is visible
      const sectionTop = rect.top;
      const sectionHeight = rect.height;

      // Animation trigger points
      const startPoint = windowHeight - 150;
      const endPoint = -sectionHeight + 300;

      if (sectionTop <= startPoint && sectionTop >= endPoint) {
        // Calculate progress (0 to 1) with smooth easing
        let scrollProgress = Math.min(
          Math.max((startPoint - sectionTop) / (startPoint - endPoint), 0),
          1,
        );

        // Apply smooth step easing
        scrollProgress =
          scrollProgress * scrollProgress * (3 - 2 * scrollProgress);

        // Define progress thresholds for each step
        const progressThresholds = steps.map(
          (_, index) => index / Math.max(steps.length - 1, 1),
        );

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
        // Reset animation when timeline is out of view
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

    // Initial check with a small delay to ensure DOM is ready
    const initialCheck = () => {
      requestAnimationFrame(() => {
        handleScroll();
      });
    };

    window.addEventListener("scroll", throttledScroll);

    // Run initial check immediately and after a brief delay for page load scenarios
    initialCheck();
    const timeoutId = setTimeout(initialCheck, 100);

    return () => {
      window.removeEventListener("scroll", throttledScroll);
      clearTimeout(timeoutId);
    };
  }, [animated, steps.length, immediateLoad]);

  // Set CSS custom properties for styling
  useEffect(() => {
    if (timelineRef.current) {
      timelineRef.current.style.setProperty("--timeline-line-color", lineColor);
      timelineRef.current.style.setProperty(
        "--timeline-active-dot-color",
        activeDotColor,
      );
      timelineRef.current.style.setProperty("--timeline-dot-size", dotSize);
    }
  }, [lineColor, activeDotColor, dotSize]);

  if (!steps || steps.length === 0) {
    return null;
  }

  return (
    <div
      ref={timelineRef}
      className={`timeline ${orientation} ${className}`}
      data-animated={animated}
    >
      <div className="timeline-container">
        <div className="timeline-line" ref={lineRef}></div>

        {steps.map((step, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot-container">
              <span
                className="timeline-dot"
                ref={(el) => (stepRefs.current[index] = el)}
              ></span>
            </div>
            <div className="timeline-content">
              {step.label && (
                <span className="timeline-label">{step.label}</span>
              )}
              {step.title && <h3 className="timeline-title">{step.title}</h3>}
              {step.description && (
                <p className="timeline-description">{step.description}</p>
              )}
              {step.content && (
                <div className="timeline-custom-content">{step.content}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
