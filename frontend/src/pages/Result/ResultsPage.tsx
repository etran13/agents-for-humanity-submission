import "./ResultsPage.css";

import ResultsSummary from "../../components/results/ResultsSummary";
import FeaturedGrantCard from "../../components/results/FeaturedGrantCard";
import GrantCard from "../../components/results/GrantCard";

import { mockResults } from "../../data/mockResults";

function ResultsPage() {
  const featuredGrant = mockResults[0];
  const otherGrants = mockResults.slice(1);

  return (
    <main className="results-page">
      <div className="results-container">

        {/* Header */}
        <header className="results-header">
          <div>
            <span className="results-eyebrow">
              AI-Powered Search
            </span>

            <h1>Your Grant Recommendations</h1>

            <p>
              We found funding opportunities that closely match
              your organization's profile and goals.
            </p>
          </div>

          <button className="secondary-button">
            Start Over
          </button>
        </header>

        {/* Summary */}
        <ResultsSummary
          totalMatches={mockResults.length}
          strongMatches={3}
          potentialFunding="$100K+"
        />

        {/* Featured Result */}
        <section className="featured-section">
          <div className="section-heading">
            <h2>Best Match</h2>
            <p>
              Based on your organization's goals and eligibility.
            </p>
          </div>

          <FeaturedGrantCard grant={featuredGrant} />
        </section>

        {/* Other Results */}
        <section className="recommendations-section">
          <div className="section-heading">
            <h2>More Opportunities</h2>
            <p>
              Additional funding opportunities worth exploring.
            </p>
          </div>

          <div className="grants-grid">
            {otherGrants.map((grant) => (
              <GrantCard
                key={grant.id}
                grant={grant}
              />
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="results-cta">
          <div>
            <h2>Looking for more opportunities?</h2>
            <p>
              Start a new search with different organization
              details or funding goals.
            </p>
          </div>

          <button className="primary-button">
            Start New Search
          </button>
        </section>

      </div>
    </main>
  );
}

export default ResultsPage;