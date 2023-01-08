import Header from "./components/Header";
import LandingDescription from "./components/LandingDescription";
import Elo7Team from "./components/Elo7Team";
import Link from "./components/Link";
import qualidadeImg from "./assets/qualidade.png";
import descontracaoImg from "./assets/descontracao.png";
import atividadesImg from "./assets/atividades.png";
import bottomImg from "./assets/foto-bottom.png";
import "./Landing.css";
import "./shared.css";

function Landing() {
  return (
    <>
      <Header />

      <main>
        <LandingDescription />
        <Elo7Team />

        <section id="elo7-benefits" className="flex-container p-2">
          <div className="grid-container w-100">
            <article className="benefit text-center">
              <img
                className="w-100"
                src={qualidadeImg}
                alt="Qualidade de vida"
              />

              <h2>Qualidade de vida</h2>
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                ut efficitur ipsum risus gravida ex, at malesuada ligula.
                Pellentesque odio ipsum,
              </p>
            </article>
            <article className="benefit text-center">
              <img
                className="w-100"
                src={descontracaoImg}
                alt="Ambiente descontraído"
              />

              <h2>Ambiente descontraído</h2>
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                ut efficitur ipsum risus gravida ex, at malesuada ligula.
                Pellentesque odio ipsum, viverra a eros sit amet, fringilla
                sagittis augue. Fusce risus tellus, tempus quis lacinia in,
                vehicula ut turpis.
              </p>
            </article>
            <article className="benefit text-center">
              <img
                className="w-100"
                src={atividadesImg}
                alt="Atividades extras"
              />

              <h2>Atividades extras</h2>
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                ut efficitur ipsum risus gravida ex, at malesuada ligula.
                Pellentesque odio ipsum, viverra a eros sit amet, fringilla
                sagittis augue. Fusce risus tellus,
              </p>
            </article>
          </div>

          <Link href={"https://www.elo7.com.br/"}>Saiba mais</Link>

          <img className="w-100 mt-2" src={bottomImg} alt="Elo7" />
        </section>

        <section id="elo7-jobs" className="flex-container p-2">
          <h2>Vagas em aberto</h2>
          <article className="w-100">
            <h3 className="mt-2">Desenvolvimento</h3>
            <div className="job-container">
              <a href="https://www.elo7.com.br/" className="job-role">
                Desenvolvedor Mobile Senior (Android e IOS)
              </a>
              <p>Vila Olímpia - São Paulo, Brasil</p>
            </div>
            <div className="job-container">
              <a href="https://www.elo7.com.br/" className="job-role">
                Desenvolvedor Java Senior
              </a>
              <p>Vila Olímpia - São Paulo, Brasil</p>
            </div>
            <div className="job-container">
              <a href="https://www.elo7.com.br/" className="job-role">
                Desenvolvedor Front-End
              </a>
              <p>Vila Olímpia - São Paulo, Brasil</p>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}

export default Landing;
