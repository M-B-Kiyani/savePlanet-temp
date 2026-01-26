import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  HomePage,
  ProjectsPage,
  InvestPage,
  HowItWorksPage,
} from "./pages/index.js";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/invest" element={<InvestPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
