import { Link } from "react-router-dom";
import "./LandingHero.css";

function LandingHero() {
  return (
    <section className="landing-hero">
      <div className="landing-hero-content">
        <p className="landing-eyebrow">
          FUNDING DISCOVERY FOR NONPROFITS
        </p>

        <h1>
          Find funding opportunities
          <span> for your nonprofit.</span>
        </h1>

        <p className="landing-hero-description">
          Discover grant opportunities that align with your
          organization's mission, programs, and goals.
        </p>

        <Link to="/onboarding" className="landing-primary-button">
          Get Started
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}

export default LandingHero;