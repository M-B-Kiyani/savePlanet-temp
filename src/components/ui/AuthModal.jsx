import { useState, useEffect } from "react";
import {
  signUp,
  signIn,
  signInWithGoogle,
  resendEmailVerification,
  sendPasswordReset,
} from "../../firebase";
import "./AuthModal.css";

function AuthModal({ isOpen, onClose, mode = "login" }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [currentMode, setCurrentMode] = useState(mode);
  const [needsVerification, setNeedsVerification] = useState(false);
  const [unverifiedUser, setUnverifiedUser] = useState(null);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  // Sync currentMode with the mode prop when it changes
  useEffect(() => {
    setCurrentMode(mode);
  }, [mode]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    if (currentMode === "signup" && password !== confirmPassword) {
      setError("Passwords don't match");
      setLoading(false);
      return;
    }

    try {
      let result;
      if (currentMode === "login") {
        result = await signIn(email, password);

        if (result.needsVerification) {
          setNeedsVerification(true);
          setUnverifiedUser(result.unverifiedUser);
          setError(result.error);
        } else if (result.error) {
          setError(result.error);
        } else {
          // Success - close modal and reset form
          onClose();
          resetForm();
        }
      } else {
        result = await signUp(email, password);

        if (result.error) {
          setError(result.error);
        } else {
          setSuccess(result.message);
          // Don't close modal immediately, show success message
          setTimeout(() => {
            onClose();
            resetForm();
          }, 3000);
        }
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setError("");
    setSuccess("");
    setNeedsVerification(false);
    setUnverifiedUser(null);
    setShowForgotPassword(false);
  };

  const handleGoogleSignIn = async () => {
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const result = await signInWithGoogle();
      if (result.error) {
        setError(result.error);
      } else {
        onClose();
        resetForm();
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleResendVerification = async () => {
    if (!unverifiedUser) return;

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const result = await resendEmailVerification(unverifiedUser);
      if (result.error) {
        setError(result.error);
      } else {
        setSuccess(result.message);
      }
    } catch (err) {
      setError("Failed to resend verification email");
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email address");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const result = await sendPasswordReset(email);
      if (result.error) {
        setError(result.error);
      } else {
        setSuccess(result.message);
        setShowForgotPassword(false);
      }
    } catch (err) {
      setError("Failed to send password reset email");
    } finally {
      setLoading(false);
    }
  };

  const switchMode = () => {
    setCurrentMode(currentMode === "login" ? "signup" : "login");
    resetForm();
  };

  if (!isOpen) return null;

  return (
    <div className="auth-modal-overlay" onClick={onClose}>
      <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
        <div className="auth-modal-header">
          <h2>{currentMode === "login" ? "Sign In" : "Sign Up"}</h2>
          <button className="auth-modal-close" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="auth-modal-content">
          {error && <div className="auth-error">{error}</div>}
          {success && <div className="auth-success">{success}</div>}

          {needsVerification ? (
            // Email verification needed
            <div className="verification-needed">
              <h3>Email Verification Required</h3>
              <p>
                Please check your email and click the verification link to
                complete your account setup.
              </p>
              <div className="verification-actions">
                <button
                  className="resend-verification-btn"
                  onClick={handleResendVerification}
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Resend Verification Email"}
                </button>
                <button
                  className="back-to-login-btn"
                  onClick={() => {
                    setNeedsVerification(false);
                    setUnverifiedUser(null);
                    setError("");
                  }}
                >
                  Back to Login
                </button>
              </div>
            </div>
          ) : showForgotPassword ? (
            // Forgot password form
            <form onSubmit={handleForgotPassword}>
              <h3>Reset Password</h3>
              <p>
                Enter your email address and we'll send you a link to reset your
                password.
              </p>

              <div className="form-group">
                <label htmlFor="reset-email">Email</label>
                <input
                  type="email"
                  id="reset-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading}
                />
              </div>

              <button
                type="submit"
                className="auth-submit-btn"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Reset Email"}
              </button>

              <button
                type="button"
                className="back-to-login-btn"
                onClick={() => setShowForgotPassword(false)}
              >
                Back to Login
              </button>
            </form>
          ) : (
            // Regular login/signup form
            <>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={loading}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={loading}
                    minLength={6}
                  />
                </div>

                {currentMode === "signup" && (
                  <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                      type="password"
                      id="confirmPassword"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      disabled={loading}
                      minLength={6}
                    />
                  </div>
                )}

                <button
                  type="submit"
                  className="auth-submit-btn"
                  disabled={loading}
                >
                  {loading
                    ? "Loading..."
                    : currentMode === "login"
                      ? "Sign In"
                      : "Sign Up"}
                </button>
              </form>

              {currentMode === "login" && (
                <div className="forgot-password">
                  <button
                    type="button"
                    className="forgot-password-btn"
                    onClick={() => setShowForgotPassword(true)}
                  >
                    Forgot Password?
                  </button>
                </div>
              )}

              <div className="auth-divider">
                <span>or</span>
              </div>

              <button
                className="google-signin-btn"
                onClick={handleGoogleSignIn}
                disabled={loading}
              >
                <img src="/google-icon.svg" alt="Google" />
                Continue with Google
              </button>

              <div className="auth-switch">
                {currentMode === "login" ? (
                  <p>
                    Don't have an account?{" "}
                    <button
                      type="button"
                      className="auth-switch-btn"
                      onClick={switchMode}
                    >
                      Sign Up
                    </button>
                  </p>
                ) : (
                  <p>
                    Already have an account?{" "}
                    <button
                      type="button"
                      className="auth-switch-btn"
                      onClick={switchMode}
                    >
                      Sign In
                    </button>
                  </p>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthModal;
