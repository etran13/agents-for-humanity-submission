import "./LandingThanks.css";

function LandingThanks() {
  return (
    <section className="landing-thanks">
      <div className="landing-thanks-content">
        <p className="landing-thanks-label">DATA SOURCE</p>

        <h2>
          Powered by <a
            href="https://grants.gov/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Grants.gov
          </a>
        </h2>

        <p>
          Thank you to Grants.gov for providing access to its public API
          and helping make federal funding opportunities more accessible.
        </p>
      </div>
    </section>
  );
}

export default LandingThanks;