import Benefit from "../Benefit";
import Link from "../Link";
import qualidadeImg from "../../assets/qualidade.png";
import descontracaoImg from "../../assets/descontracao.png";
import atividadesImg from "../../assets/atividades.png";
import bottomImg from "../../assets/foto-bottom.png";
import "./style.css";

function Elo7Benefits() {
  const benefits = [
    {
      name: "Qualidade de vida",
      picture: qualidadeImg,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut efficitur ipsum risus gravida ex, at malesuada ligula. Pellentesque odio ipsum,",
    },
    {
      name: "Ambiente descontraído",
      picture: descontracaoImg,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut efficitur ipsum risus gravida ex, at malesuada ligula. Pellentesque odio ipsum, viverra a eros sit amet, fringilla sagittis augue. Fusce risus tellus, tempus quis lacinia in, vehicula ut turpis.",
    },
    {
      name: "Atividades extras",
      picture: atividadesImg,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut efficitur ipsum risus gravida ex, at malesuada ligula. Pellentesque odio ipsum, viverra a eros sit amet, fringilla sagittis augue. Fusce risus tellus,",
    },
  ];

  return (
    <section id="elo7-benefits" className="flex-container p-2">
      <div className="grid-container w-100">
        {benefits.map(({ name, picture, description }) => (
          <Benefit
            key={name}
            name={name}
            picture={picture}
            description={description}
          />
        ))}
      </div>

      <Link href={"https://www.elo7.com.br/"}>Saiba mais</Link>

      <img className="w-100 mt-2" src={bottomImg} alt="Elo7" />
    </section>
  );
}

export default Elo7Benefits;
