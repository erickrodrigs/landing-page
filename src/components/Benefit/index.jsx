import styles from "./styles.module.css";

function Benefit({ picture, name, description }) {
  return (
    <article className={styles.benefit}>
      <img src={picture} alt={name} />

      <h2>{name}</h2>
      <p>{description}</p>
    </article>
  );
}

export default Benefit;
