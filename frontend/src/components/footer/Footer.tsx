import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand-section">
          <Link to="/" className="footer-brand">
            FundFind
          </Link>

          <p>Funding discovery for nonprofit organizations.</p>
        </div>
      </div>

      <div className="footer-disclaimer">
        This product uses the Grants.gov API but is not endorsed or
        certified by the U.S. Department of Health and Human Services.
      </div>

      <div className="footer-bottom">
        <span>© 2026 FundFind</span>

        <a
          href="https://grants.gov/api/terms-conditions"
          target="_blank"
          rel="noopener noreferrer"
        >
          Grants.gov API Terms & Conditions
        </a>
      </div>
    </footer>
  );
}

export default Footer;