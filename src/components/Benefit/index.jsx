import "./style.css";

function Benefit({ picture, name, description }) {
  return (
    <article className="benefit text-center">
      <img className="w-100" src={picture} alt={name} />

      <h2>{name}</h2>
      <p className="text-justify">{description}</p>
    </article>
  );
}

export default Benefit;
