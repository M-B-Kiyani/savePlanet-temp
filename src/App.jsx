import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  HomePage,
  ProjectsPage,
  InvestPage,
  HowItWorksPage,
  ProjectDetailPage,
} from "./pages/index.js";
import AuthModal from "./components/ui/AuthModal";
import ScrollToTop from "./components/ui/ScrollToTop";
import { useAuth } from "./hooks/useAuth";
import "./App.css";

function App() {
  const {
    user,
    loading,
    showAuthModal,
    authMode,
    handleLoginClick,
    handleSignupClick,
    handleLogout,
    closeAuthModal,
  } = useAuth();

  // if (loading) {
  //   return (
  //     <div className="app-loading">
  //       <div className="loading-spinner">Loading...</div>
  //     </div>
  //   );
  // }

  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                user={user}
                onLoginClick={handleLoginClick}
                onSignupClick={handleSignupClick}
                onLogoutClick={handleLogout}
              />
            }
          />
          <Route
            path="/projects"
            element={
              <ProjectsPage
                user={user}
                onLoginClick={handleLoginClick}
                onSignupClick={handleSignupClick}
                onLogoutClick={handleLogout}
              />
            }
          />
          <Route
            path="/projects/:id"
            element={
              <ProjectDetailPage
                user={user}
                onLoginClick={handleLoginClick}
                onSignupClick={handleSignupClick}
                onLogoutClick={handleLogout}
              />
            }
          />
          <Route
            path="/invest"
            element={
              <InvestPage
                user={user}
                onLoginClick={handleLoginClick}
                onSignupClick={handleSignupClick}
                onLogoutClick={handleLogout}
              />
            }
          />
          <Route
            path="/how-it-works"
            element={
              <HowItWorksPage
                user={user}
                onLoginClick={handleLoginClick}
                onSignupClick={handleSignupClick}
                onLogoutClick={handleLogout}
              />
            }
          />
        </Routes>
      </Router>

      {/* Authentication Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={closeAuthModal}
        mode={authMode}
      />
    </div>
  );
}

export default App;
