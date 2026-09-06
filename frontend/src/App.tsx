import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import OnboardingPage from "./pages/Onboarding/OnboardingPage";
import ProcessingPage from "./pages/Processing/ProcessingPage";
import ResultsPage from "./pages/Result/ResultsPage";
import LandingPage from "./pages/Landing/LandingPage";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <BrowserRouter>
      <div className={`app ${darkMode ? "dark-mode" : ""}`}>
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <main className="app-content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/onboarding" element={<OnboardingPage />} />
            <Route path="/processing" element={<ProcessingPage />} />
            <Route path="/results" element={<ResultsPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;