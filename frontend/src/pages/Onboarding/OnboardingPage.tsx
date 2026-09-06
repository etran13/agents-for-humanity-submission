import { useNavigate } from "react-router-dom";
import "./OnboardingPage.css";

function OnboardingPage() {
  const navigate = useNavigate();

  return (
    <main className="onboarding-page">
      <section className="onboarding-card">
        <header className="onboarding-header">
          <p className="eyebrow">NONPROFIT ONBOARDING</p>

          <h1>Tell us about your organization</h1>

          <p>
            Provide some basic information so we can find the best
            opportunities and resources for your nonprofit.
          </p>
        </header>

        <form
          className="onboarding-form"
          onSubmit={(event) => {
            event.preventDefault();
            navigate("/processing");
          }}
        >
          <div className="form-group">
            <label htmlFor="organizationName">
              Organization Name
            </label>

            <input
              id="organizationName"
              name="organizationName"
              type="text"
              placeholder="Enter your nonprofit's name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="website">Website</label>

            <input
              id="website"
              name="website"
              type="url"
              placeholder="https://yourorganization.org"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.org"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">
              About Your Organization
            </label>

            <textarea
              id="description"
              name="description"
              rows={5}
              placeholder="Tell us briefly about your nonprofit and the work you do..."
            />
          </div>

          <div className="form-group">
            <label htmlFor="documents">
              Supporting Documents
            </label>

            <div className="upload-box">
              <input
                id="documents"
                name="documents"
                type="file"
                multiple
              />

              <p>Choose documents to upload</p>

              <span>
                PDF, DOC, DOCX, or other supporting files
              </span>
            </div>
          </div>

          <button type="submit" className="continue-button">
            Submit
          </button>
        </form>
      </section>
    </main>
  );
}

export default OnboardingPage;