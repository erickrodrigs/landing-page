import headerImg from "../../assets/foto-header.png";
import styles from "./styles.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <img src={headerImg} alt="Palavras do CEO" />
      <div className={styles.titleContainer}>
        <h1>Trabalhe no Elo7</h1>
      </div>
    </header>
  );
}

export default Header;
