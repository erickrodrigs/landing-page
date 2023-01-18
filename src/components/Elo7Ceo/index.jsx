import placeholderVideoImg from "../../assets/placeholder-video.png";
import styles from "./styles.module.css";

function Elo7Ceo() {
  return (
    <article className={styles.ceoContainer}>
      <video poster={placeholderVideoImg}></video>
      <div className={styles.ceoInfo}>
        <h2>Palavra do CEO</h2>
        <em>Carlos Curioni</em>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut
          efficitur ipsum risus gravida ex, at malesuada ligula. Pellentesque
          odio ipsum, viverra a eros sit amet, fringilla sagittis augue. Fusce
          risus tellus, tempus quis lacinia in, vehicula ut turpis.
        </p>
      </div>
    </article>
  );
}

export default Elo7Ceo;
