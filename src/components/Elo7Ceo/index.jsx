import placeholderVideoImg from "../../assets/placeholder-video.png";
import "./style.css";

function Elo7Ceo() {
  return (
    <div id="elo7-ceo" className="flex-container">
      <img className="w-100" src={placeholderVideoImg} alt="Palavras do CEO" />
      <article>
        <h2>Palavra do CEO</h2>
        <em className="ceo-name">Carlos Curioni</em>
        <p className="text-justify mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut
          efficitur ipsum risus gravida ex, at malesuada ligula. Pellentesque
          odio ipsum, viverra a eros sit amet, fringilla sagittis augue. Fusce
          risus tellus, tempus quis lacinia in, vehicula ut turpis.
        </p>
      </article>
    </div>
  );
}

export default Elo7Ceo;
