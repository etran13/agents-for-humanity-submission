import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProcessingPage.css";

const processingSteps = [
  "Reading organization information",
  "Finding relevant opportunities",
  "Analyzing eligibility",
  "Preparing recommendations",
];

function ProcessingPage() {
  const navigate = useNavigate();

  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((previous) => {
        const next = previous + 1;

        if (next >= 100) {
          clearInterval(interval);
          return 100;
        }

        return next;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentStep(Math.min(Math.floor(progress / 25), 3));
  }, [progress]);

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => {
        navigate("/results");
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [progress, navigate]);

  return (
    <main className="processing-page">
      <section className="processing-container">

        <div className="processing-icon">
          <div className="processing-spinner" />
        </div>

        <h1>Analyzing your organization</h1>

        <p className="processing-description">
          We're finding opportunities that match your organization's
          needs and eligibility.
        </p>

        <div className="processing-progress">
          <div className="progress-header">
            <span>Processing</span>
            <span>{progress}%</span>
          </div>

          <div className="progress-track">
            <div
              className="progress-bar"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="processing-steps">
          {processingSteps.map((step, index) => (
            <div
              key={step}
              className={`processing-step ${
                index < currentStep
                  ? "completed"
                  : index === currentStep
                    ? "active"
                    : ""
              }`}
            >
              <div className="step-indicator">
                {index < currentStep ? "✓" : index + 1}
              </div>

              <span>{step}</span>
            </div>
          ))}
        </div>

      </section>
    </main>
  );
}

export default ProcessingPage;