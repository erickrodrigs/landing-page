import { JobsService } from "./jobs";

const response = {
  vagas: [
    {
      cargo: "Desenvolvedor Mobile Junior (Android)",
      ativa: false,
      link: "http://elo7.dev/vaga/desenvolvedor-mobile-junior",
      localizacao: {
        bairro: "Vila Olímpia",
        cidade: "São Paulo",
        pais: "Brasil",
      },
    },
    {
      cargo: "Desenvolvedor Front end",
      ativa: true,
      link: "http://elo7.dev/vaga/desenvolvedor-front-end",
      localizacao: {
        bairro: "Vila Olímpia",
        cidade: "São Paulo",
        pais: "Brasil",
      },
    },
    {
      cargo: "Desenvolvedor Java Junior",
      ativa: true,
      link: "http://elo7.dev/vaga/desenvolvedor-java-jr",
    },
  ],
};

describe("JobsService", () => {
  describe("when fetch fails", () => {
    beforeEach(() => {
      jest.spyOn(global, "fetch").mockRejectedValue({});
    });

    it("should return an empty list", async () => {
      const jobsService = new JobsService();
      const jobs = await jobsService.getAll();

      expect(jobs.length).toBe(0);
    });
  });

  describe("when fetch works", () => {
    beforeEach(() => {
      jest.spyOn(global, "fetch").mockResolvedValue({
        json: () => Promise.resolve(response),
      });
    });

    it("should return jobs with right attributes", async () => {
      const jobsService = new JobsService();
      const jobs = await jobsService.getAll();

      jobs.forEach((job) => {
        expect(job).toEqual(
          expect.objectContaining({
            role: expect.any(String),
            link: expect.any(String),
            location: expect.any(String),
          })
        );
      });
    });

    it("should not return non-active jobs", async () => {
      const jobsService = new JobsService();
      const jobs = await jobsService.getAll();

      expect(
        jobs.find(
          ({ role }) => role === "Desenvolvedor Mobile Junior (Android)"
        )
      ).toBeUndefined();
    });

    it("should return 'Remoto' as location for jobs that do not have one", async () => {
      const jobsService = new JobsService();
      const jobs = await jobsService.getAll();
      const javaJrDeveloperJob = jobs.find(
        ({ role }) => role === "Desenvolvedor Java Junior"
      );

      expect(javaJrDeveloperJob.location).toBe("Remoto");
    });

    it("should group neighborhood, city and country from location as a string", async () => {
      const jobsService = new JobsService();
      const jobs = await jobsService.getAll();
      const nonRemoteJobs = jobs.filter(
        ({ location }) => location !== "Remoto"
      );

      nonRemoteJobs.forEach((job) => {
        expect(job.location).toMatch(/^.+\s-\s.+,\s.+$/);
      });
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
});
