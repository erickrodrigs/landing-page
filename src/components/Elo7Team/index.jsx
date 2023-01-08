import Elo7Ceo from "../Elo7Ceo";
import Elosetters from "../Elosetters";
import "./style.css";

function Elo7Team() {
  return (
    <section className="flex-container p-2 bg-gray">
      <Elo7Ceo />
      <Elosetters />
    </section>
  );
}

export default Elo7Team;
