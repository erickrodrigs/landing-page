import Elo7Ceo from "../Elo7Ceo";
import Elosetters from "../Elosetters";
import styles from "./styles.module.css";

function Elo7Team() {
  return (
    <section className={styles.elo7team}>
      <Elo7Ceo />
      <Elosetters />
    </section>
  );
}

export default Elo7Team;
