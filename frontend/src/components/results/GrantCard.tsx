import type { GrantResult } from "../../data/mockResults";

interface GrantCardProps {
  grant: GrantResult;
}

function GrantCard({ grant }: GrantCardProps) {
  return (
    <article className="grant-card">
      <div className="grant-card-header">
        <div>
          <p className="grant-funder">{grant.funder}</p>
          <h3>{grant.name}</h3>
        </div>

        <div className="match-score">
          <span>{grant.matchScore}%</span>
          <small>Match</small>
        </div>
      </div>

      <p className="grant-description">
        {grant.description}
      </p>

      <div className="grant-details">
        <div className="grant-detail">
          <span className="detail-label">Funding</span>
          <strong>{grant.amount}</strong>
        </div>

        <div className="grant-detail">
          <span className="detail-label">Deadline</span>
          <strong>{grant.deadline}</strong>
        </div>

        <div className="grant-detail">
          <span className="detail-label">Location</span>
          <strong>{grant.location}</strong>
        </div>
      </div>

      <div className="grant-tags">
        {grant.focusAreas.map((area) => (
          <span key={area} className="grant-tag">
            {area}
          </span>
        ))}
      </div>

      <div className="grant-card-footer">
        <button className="secondary-button">
          View Details
        </button>
      </div>
    </article>
  );
}

export default GrantCard;