import LandingHero from "./LandingHero";
import LandingThank from "./LandingThanks";
import "./LandingPage.css";

function LandingPage() {
  return (
    <main className="landing-page">
      <LandingHero/>
      <LandingThank/>
    </main>
  );
}

export default LandingPage;