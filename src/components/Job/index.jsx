import styles from "./styles.module.css";

function Job({ role, link, location }) {
  return (
    <div className={styles.jobContainer}>
      <a href={link} className={styles.jobRole} data-testid="job">
        {role}
      </a>
      <p>{location}</p>
    </div>
  );
}

export default Job;
