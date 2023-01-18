import styles from "./styles.module.css";

function Link({ href, children }) {
  return (
    <a className={styles.link} href={href}>
      {children}
    </a>
  );
}

export default Link;
