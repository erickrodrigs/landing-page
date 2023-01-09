import Header from "./components/Header";
import LandingDescription from "./components/LandingDescription";
import Elo7Team from "./components/Elo7Team";
import Elo7Benefits from "./components/Elo7Benefits";
import AvailableJobs from "./components/AvailableJobs";
import "./Landing.css";
import "./shared.css";

function Landing() {
  return (
    <>
      <Header />

      <main>
        <LandingDescription />
        <Elo7Team />
        <Elo7Benefits />
        <AvailableJobs />
      </main>
    </>
  );
}

export default Landing;
