import Link from "../Link";
import styles from "./styles.module.css";

function LandingDescription() {
  return (
    <section className={styles.landingDescriptionContainer}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut
        efficitur ex, at malesuada ligula. Pellentesque odio ipsum, viverra a
        eros sit amet, fringilla sagittis augue. Fusce risus tellus, tempus quis
        lacinia in, vehicula ut turpis.
      </p>
      <Link href={"#elo7-jobs"}>Vagas em aberto</Link>
    </section>
  );
}

export default LandingDescription;
