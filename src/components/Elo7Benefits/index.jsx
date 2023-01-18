import Benefit from "../Benefit";
import Link from "../Link";
import bottomImg from "../../assets/foto-bottom.png";
import { useBenefits } from "./hook";
import styles from "./styles.module.css";

function Elo7Benefits() {
  const { benefits } = useBenefits();

  return (
    <section className={styles.benefitsContainer}>
      <div>
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

      <img src={bottomImg} alt="Elo7" />
    </section>
  );
}

export default Elo7Benefits;
