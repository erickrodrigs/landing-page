import Benefit from "../Benefit";
import Link from "../Link";
import bottomImg from "../../assets/foto-bottom.png";
import "./style.css";
import { useBenefits } from "./hook";

function Elo7Benefits() {
  const { benefits } = useBenefits();

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
