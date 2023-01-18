import { useElosetters } from "./hook";
import styles from "./styles.module.css";

function Elosetters() {
  const { elosetters } = useElosetters();

  return (
    <article className={styles.elosettersContainer}>
      <h2>
        Conheça nosso time
        <br />
        fora de série
      </h2>
      <div>
        {elosetters.map(({ name, photo }) => (
          <img key={name} src={photo} alt={name} />
        ))}
      </div>
    </article>
  );
}

export default Elosetters;
