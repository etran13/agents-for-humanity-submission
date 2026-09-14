import { useNavigate } from "react-router-dom";
import "./OnboardingPage.css";
import { states } from "../../data/states";
import { useState } from "react";
import TagSelect from "../../components/TagSelect/TagSelect";
import { focusAreas } from "../../data/focusAreas";

const API_BASE_URL =
  "https://fu-51deb0088fa2492ebff88cb92746f8a5.ecs.us-east-2.on.aws";

function OnboardingPage() {
  const navigate = useNavigate();
  const [selectedFocusAreas, setSelectedFocusAreas] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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
          onSubmit={async (event) => {
            event.preventDefault();

            const form = event.currentTarget;
            const formData = new FormData(form);

            const payload = {
              organization_name: formData.get("organizationName"),
              organization_type: formData.getAll("organizationType"),
              website: formData.get("website"),
              email: formData.get("email"),
              description: formData.get("description"),
              city: formData.get("city"),
              state: formData.get("state"),
              funding_instrument_type: formData.getAll("fundingInstrumentType"),
              focus_area: selectedFocusAreas,
              population_served: formData.get("populationServed"),
              funding_need: formData.get("fundingNeed"),
              organization_size: formData.get("organizationSize"),
              geographic_service_area: formData.get("geographicServiceArea"),
              project_budget: Number(formData.get("projectBudget")),
              project_start_date: formData.get("projectStartDate"),
              project_end_date: formData.get("projectEndDate"),
            };

            try {
              setIsSubmitting(true);

              const response = await fetch(
                "https://fu-51deb0088fa2492ebff88cb92746f8a5.ecs.us-east-2.on.aws/api/nonprofits",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(payload),
                }
              );

              if (!response.ok) {
                throw new Error(`Request failed: ${response.status}`);
              }

              const result = await response.json();

              console.log("Nonprofit created:", result);

              navigate("/processing");
            } catch (error) {
              console.error("Failed to submit nonprofit:", error);
              alert("Something went wrong while submitting your organization.");
            } finally {
              setIsSubmitting(false);
            }
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
            <label htmlFor="organizationType">
              Organization Type
            </label>

            <select
              id="organizationType"
              name="organizationType"
              multiple
            >
              <option value="Nonprofit with 501C3 IRS Status (Other than Institution of Higher Education)">
                Nonprofit with 501(c)(3) IRS Status
              </option>

              <option value="Nonprofit without 501C3 IRS Status (Other than Institution of Higher Education)">
                Nonprofit without 501(c)(3) IRS Status
              </option>

              <option value="State Government">
                State Government
              </option>

              <option value="County Government">
                County Government
              </option>

              <option value="City or Township Government">
                City or Township Government
              </option>

              <option value="Special District Government">
                Special District Government
              </option>

              <option value="Independent School District">
                Independent School District
              </option>

              <option value="Other">
                Other
              </option>
            </select>
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
            <label htmlFor="state">State</label>

            <select id="state" name="state" defaultValue="">
              <option value="" disabled>
                Select your state
              </option>

              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="city">
              City
            </label>

            <input
              id="city"
              name="city"
              type="text"
              placeholder="Enter your city"
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
            <label htmlFor="organizationSize">
              Organization Size
            </label>

            <select
              id="organizationSize"
              name="organizationSize"
              defaultValue=""
            >
              <option value="" disabled>
                Select organization size
              </option>

              <option value="1–10 employees">1–10 employees</option>
              <option value="11–50 employees">11–50 employees</option>
              <option value="51–250 employees">51–250 employees</option>
              <option value="251–500 employees">251–500 employees</option>
              <option value="500+ employees">500+ employees</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="fundingInstrumentType">
              Funding Instrument Type
            </label>

            <select
              id="fundingInstrumentType"
              name="fundingInstrumentType"
              multiple
            >
              <option value="Grant">Grant</option>
              <option value="Cooperative Agreement">
                Cooperative Agreement
              </option>
              <option value="Procurement Contract">
                Procurement Contract
              </option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="focusArea">
              Focus Areas
            </label>

            <TagSelect
              options={focusAreas}
              value={selectedFocusAreas}
              onChange={setSelectedFocusAreas}
              placeholder="Search focus areas..."
            />
          </div>

          <div className="form-group">
            <label htmlFor="populationServed">
              Population Served
            </label>

            <input
              id="populationServed"
              name="populationServed"
              type="text"
              placeholder="Who does your organization serve?"
            />
          </div>

          <div className="form-group">
            <label htmlFor="fundingNeed">
              Funding Need
            </label>

            <textarea
              id="fundingNeed"
              name="fundingNeed"
              rows={4}
              placeholder="What funding does your organization need?"
            />
          </div>

          <div className="form-group">
            <label htmlFor="geographicServiceArea">
              Geographic Service Area
            </label>

            <input
              id="geographicServiceArea"
              name="geographicServiceArea"
              type="text"
              placeholder="e.g. Chicago, Illinois"
            />
          </div>

          <div className="form-group">
            <label htmlFor="projectBudget">
              Project Budget
            </label>

            <input
              id="projectBudget"
              name="projectBudget"
              type="number"
              min="0"
              step="0.01"
              placeholder="Enter project budget"
            />
          </div>

          <div className="form-group">
            <label htmlFor="projectStartDate">
              Project Start Date
            </label>

            <input
              id="projectStartDate"
              name="projectStartDate"
              type="date"
            />
          </div>

          <div className="form-group">
            <label htmlFor="projectEndDate">
              Project End Date
            </label>

            <input
              id="projectEndDate"
              name="projectEndDate"
              type="date"
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

          <button
            type="submit"
            className="continue-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </section>
    </main>
  );
}

export default OnboardingPage;