import Job from "../Job";
import styles from "./styles.module.css";

function AvailableJobs({ jobs }) {
  return (
    <section id="elo7-jobs" className={styles.availableJobsContainer}>
      <h2>Vagas em aberto</h2>
      <article className={styles.developmentJobs}>
        {jobs.length === 0 ? (
          <p>Não há vagas disponíveis.</p>
        ) : (
          <>
            <h3>Desenvolvimento</h3>
            {jobs.map(({ role, link, location }, index) => (
              <Job
                key={`${role}-${index}`}
                role={role}
                link={link}
                location={location}
              />
            ))}
          </>
        )}
      </article>
    </section>
  );
}

export default AvailableJobs;
