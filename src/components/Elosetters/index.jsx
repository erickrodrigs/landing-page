import { useElosetters } from "./hook";
import "./style.css";

function Elosetters() {
  const { elosetters } = useElosetters();

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
