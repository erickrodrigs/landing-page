import styles from "./styles.module.css";

function Link({ href, children }) {
  return (
    <>
      <hr className={styles.line} />
      <a className={styles.link} href={href}>
        {children}
      </a>
    </>
  );
}

export default Link;
