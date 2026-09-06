import type { GrantResult } from "../../data/mockResults";

interface FeaturedGrantCardProps {
  grant: GrantResult;
}

function FeaturedGrantCard({ grant }: FeaturedGrantCardProps) {
  return (
    <article className="featured-grant">
      <div className="featured-badge">
        Top Match
      </div>

      <div className="featured-header">
        <div>
          <p className="grant-funder">{grant.funder}</p>
          <h2>{grant.name}</h2>
        </div>

        <div className="featured-score">
          <strong>{grant.matchScore}%</strong>
          <span>AI Match</span>
        </div>
      </div>

      <div className="featured-details">
        <div>
          <span>Funding</span>
          <strong>{grant.amount}</strong>
        </div>

        <div>
          <span>Deadline</span>
          <strong>{grant.deadline}</strong>
        </div>

        <div>
          <span>Location</span>
          <strong>{grant.location}</strong>
        </div>
      </div>

      <div className="why-match">
        <h3>Why this is a strong match</h3>
        <p>{grant.whyMatch}</p>
      </div>

      <div className="grant-tags">
        {grant.focusAreas.map((area) => (
          <span key={area} className="grant-tag">
            {area}
          </span>
        ))}
      </div>

      <button className="primary-button">
        View Grant Details
      </button>
    </article>
  );
}

export default FeaturedGrantCard;