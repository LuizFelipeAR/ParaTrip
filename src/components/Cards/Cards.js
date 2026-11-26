import styles from "./Cards.module.css";

export default function Card({
  wiki,
  imagem,
  nome,
  localizacao,
  descricao,
  data,
}) {
  return (
    <div className={styles.cards}>
      <a
        href={wiki}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.linkImagem}
      >
        <img src={imagem} alt={nome} className={styles.imagem} />
      </a>
      <div className={styles.caracteristicas}>
        <h2>{nome}</h2>
        <span className={styles.localizacao}>{localizacao}</span>
        <p>{descricao}</p>
        <p>{data}</p>
      </div>
    </div>
  );
}
