import { useEffect, useState } from "react";
import { JobsService } from "../../services/jobs";

export const useJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const jobsService = new JobsService();

    jobsService.getAll().then((jobs) => setJobs(jobs));
  }, []);

  return { jobs };
};
