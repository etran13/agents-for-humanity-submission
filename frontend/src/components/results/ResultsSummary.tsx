interface ResultsSummaryProps {
  totalMatches: number;
  strongMatches: number;
  potentialFunding: string;
}

function ResultsSummary({
  totalMatches,
  strongMatches,
  potentialFunding,
}: ResultsSummaryProps) {
  return (
    <section className="results-summary">
      <div className="summary-item">
        <span>Matches Found</span>
        <strong>{totalMatches}</strong>
      </div>

      <div className="summary-item">
        <span>Strong Matches</span>
        <strong>{strongMatches}</strong>
      </div>

      <div className="summary-item">
        <span>Potential Funding</span>
        <strong>{potentialFunding}</strong>
      </div>
    </section>
  );
}

export default ResultsSummary;