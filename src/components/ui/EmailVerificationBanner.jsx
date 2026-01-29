import { useState } from "react";
import { resendEmailVerification } from "../../firebase";
import "./EmailVerificationBanner.css";

function EmailVerificationBanner({ user, onClose }) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleResendVerification = async () => {
    setLoading(true);
    setMessage("");

    try {
      const result = await resendEmailVerification(user);
      if (result.error) {
        setMessage(result.error);
      } else {
        setMessage(result.message);
      }
    } catch (err) {
      setMessage("Failed to resend verification email");
    } finally {
      setLoading(false);
    }
  };

  if (!user || user.emailVerified) {
    return null;
  }

  return (
    <div className="email-verification-banner">
      <div className="banner-content">
        <div className="banner-message">
          <span className="warning-icon">⚠️</span>
          <span>Please verify your email address to access all features.</span>
        </div>
        <div className="banner-actions">
          <button
            className="resend-btn"
            onClick={handleResendVerification}
            disabled={loading}
          >
            {loading ? "Sending..." : "Resend Email"}
          </button>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>
      </div>
      {message && (
        <div
          className={`banner-feedback ${message.includes("successfully") ? "success" : "error"}`}
        >
          {message}
        </div>
      )}
    </div>
  );
}

export default EmailVerificationBanner;
