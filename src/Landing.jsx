import Header from "./components/Header";
import LandingDescription from "./components/LandingDescription";
import Elo7Team from "./components/Elo7Team";
import Elo7Benefits from "./components/Elo7Benefits";
import "./Landing.css";
import "./shared.css";

function Landing() {
  return (
    <>
      <Header />

      <main>
        <LandingDescription />
        <Elo7Team />
        <Elo7Benefits />

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
