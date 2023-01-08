import headerImg from "../../assets/foto-header.png";
import "./style.css";

function Header() {
  return (
    <header className="header">
      <img src={headerImg} alt="Palavras do CEO" />
      <div className="title-container">
        <h1>Trabalhe no Elo7</h1>
      </div>
    </header>
  );
}

export default Header;
