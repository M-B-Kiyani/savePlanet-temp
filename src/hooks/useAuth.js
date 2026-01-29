import { useState, useEffect, useCallback } from "react";
import { auth, onAuthStateChanged, logOut } from "../firebase";

// Custom hook for authentication handlers
export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState("login");

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && !user.emailVerified) {
        // User is signed in but email is not verified
        console.log("User email not verified, signing out...");
        logOut(); // Sign out unverified users
        setUser(null);
      } else {
        setUser(user);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLoginClick = useCallback(() => {
    setAuthMode("login");
    setShowAuthModal(true);
  }, []);

  const handleSignupClick = useCallback(() => {
    setAuthMode("signup");
    setShowAuthModal(true);
  }, []);

  const handleLogout = useCallback(async () => {
    try {
      console.log("Logout initiated...");
      await logOut();
      console.log("Logout successful");
    } catch (error) {
      console.error("Logout error:", error);
    }
  }, []);

  const closeAuthModal = useCallback(() => {
    setShowAuthModal(false);
  }, []);

  const handleMenuClick = useCallback(() => {
    console.log("Menu clicked");
    // TODO: Implement actual menu logic
  }, []);

  return {
    user,
    loading,
    showAuthModal,
    authMode,
    handleLoginClick,
    handleSignupClick,
    handleLogout,
    closeAuthModal,
    handleMenuClick,
  };
};

export default useAuth;
