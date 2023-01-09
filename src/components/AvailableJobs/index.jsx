import Job from "../Job";

function AvailableJobs({ jobs }) {
  return (
    <section id="elo7-jobs" className="flex-container p-2">
      <h2>Vagas em aberto</h2>
      <article className="w-100">
        <h3 className="mt-2">Desenvolvimento</h3>
        {jobs.map(({ role, link, location }) => (
          <Job key={role} role={role} link={link} location={location} />
        ))}
      </article>
    </section>
  );
}

export default AvailableJobs;
