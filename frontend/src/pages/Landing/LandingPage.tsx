import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <section className="landing-hero">
        <div className="landing-content">
          <h1>Nonprofit AI</h1>

          <p>
            An AI-powered assistant designed to help nonprofits
            discover opportunities and simplify their work.
          </p>

          <button
            className="landing-button"
            onClick={() => navigate("/onboarding")}
          >
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;