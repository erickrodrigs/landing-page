import camilaImg from "../../assets/camila.png";
import gutoImg from "../../assets/guto.png";
import davidImg from "../../assets/david.png";
import beatrizImg from "../../assets/beatriz.png";
import "./style.css";

function Elosetters() {
  const elosetters = [
    { name: "Camila", photo: camilaImg },
    { name: "Guto", photo: gutoImg },
    { name: "David", photo: davidImg },
    { name: "Beatriz", photo: beatrizImg },
  ];

  return (
    <article id="elosetters" className="flex-container w-100">
      <h2 className="mt-2 text-center">
        Conheça nosso time
        <br />
        fora de série
      </h2>
      <div className="grid-container w-100 mt-2">
        {elosetters.map(({ name, photo }) => (
          <img key={name} src={photo} alt={name} />
        ))}
      </div>
    </article>
  );
}

export default Elosetters;
