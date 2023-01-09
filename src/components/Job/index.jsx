import "./style.css";

function Job({ role, link, location }) {
  return (
    <div className="job-container">
      <a href={link} className="job-role">
        {role}
      </a>
      <p>{location}</p>
    </div>
  );
}

export default Job;
