import { render, screen } from "@testing-library/react";
import { JobsService } from "../../services/jobs";
import Landing from "./index";

const jobs = [
  {
    role: "Desenvolvedor Front end",
    link: "http://elo7.dev/vaga/desenvolvedor-front-end",
    location: "Vila Olímpia - São Paulo, Brasil",
  },
  {
    role: "Desenvolvedor Java Junior",
    link: "http://elo7.dev/vaga/desenvolvedor-java-jr",
    location: "Remoto",
  },
];

describe("Landing page", () => {
  beforeEach(() => {
    jest.spyOn(JobsService.prototype, "getAll").mockResolvedValue(jobs);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should render jobs list", async () => {
    render(<Landing />);

    const renderedJobs = await screen.findAllByTestId("job");
    const jobsNames = renderedJobs.map((job) => job.innerHTML);

    expect(renderedJobs.length).toBe(2);
    expect(jobsNames).toEqual([
      "Desenvolvedor Front end",
      "Desenvolvedor Java Junior",
    ]);
  });
});
