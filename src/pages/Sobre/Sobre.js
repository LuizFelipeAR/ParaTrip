import style from "./Sobre.module.css";
import avatar from "../../assets/avatar.png";

export default function Sobre() {
  return (
    <div className={style.sobre}>
      <img src={avatar} alt="Foto do criador" />

      <div className={style.informacoes}>
        <h1 className={style.nome}>Luiz Felipe Araújo Dos Reis</h1>

        <div className={style.redesociais}>
          <a
            href="https://www.instagram.com/Filreis_"
            target="_blank"
            rel="noreferrer"
          >
            <ion-icon name="logo-instagram"></ion-icon>
          </a>

          <a
            href="https://github.com/LuizFelipeAR"
            target="_blank"
            rel="noreferrer"
          >
            <ion-icon name="logo-github"></ion-icon>
          </a>

          <a
            href="https://www.linkedin.com/in/luiz-felipe-ara%C3%BAjo-dos-reis-7353523b1/"
            target="_blank"
            rel="noreferrer"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </div>
      </div>
    </div>
  );
}
