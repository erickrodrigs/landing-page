import Header from "../../components/Header";
import LandingDescription from "../../components/LandingDescription";
import Elo7Team from "../../components/Elo7Team";
import Elo7Benefits from "../../components/Elo7Benefits";
import AvailableJobs from "../../components/AvailableJobs";
import { useJobs } from "./hook";
import "./styles.css";

function Landing() {
  const { jobs } = useJobs();

  return (
    <>
      <Header />

      <main>
        <LandingDescription />
        <Elo7Team />
        <Elo7Benefits />
        <AvailableJobs jobs={jobs} />
      </main>
    </>
  );
}

export default Landing;
