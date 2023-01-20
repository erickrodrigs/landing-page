export class JobsService {
  #parseData(rawData) {
    return rawData.vagas
      .filter(({ ativa }) => ativa)
      .map(({ cargo, link, localizacao }) => ({
        role: cargo,
        link,
        location: localizacao
          ? `${localizacao.bairro} - ${localizacao.cidade}, ${localizacao.pais}`
          : "Remoto",
      }));
  }

  async getAll() {
    try {
      const response = await fetch(
        "https://www.mocky.io/v2/5d6fb6b1310000f89166087b"
      );
      const rawData = await response.json();
      const jobs = this.#parseData(rawData);

      return jobs;
    } catch (error) {
      console.log(`Unable to fetch jobs from remote source: ${error}`);
      return [];
    }
  }
}
