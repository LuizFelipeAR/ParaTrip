import Card from "../../components/Cards/Cards";
import styles from "./Destinos.module.css";
import alter from "../../assets/alterdochao.jpg";
import salinas from "../../assets/salinas.jpg";
import marajo from "../../assets/marajo.jpg";

export default function Destinos() {
  return (
    <div className={styles.destinos}>
      <Card
        wiki="https://pt.wikipedia.org/wiki/Alter_do_Ch%C3%A3o_(Santar%C3%A9m)"
        imagem={alter}
        nome="Alter Do Chao"
        localizacao="Santarém, Pará, Brasil"
        descricao="Alter do Chão é um distrito do município de Santarém, no estado do Pará, amplamente reconhecido como o 'Caribe Amazônico' devido às suas praias de areia branca e águas cristalinas de água doce banhadas pelo Rio Tapajós. ⁠ Eleito pelo jornal britânico The Guardian como uma das 10 melhores praias do Brasil, o destino oferece uma combinação única de beleza natural exuberante, infraestrutura turística acolhedora e rica gastronomia regional. "
        data="Melhor época: agosto a dezembro"
      ></Card>
      <Card
        wiki="https://pt.wikipedia.org/wiki/Salin%C3%B3polis"
        imagem={salinas}
        nome="Salinas"
        localizacao="Salinópolis, Pará, Brasil"
        descricao="Salinópolis, comumente conhecida como Salinas, é um município do estado do Pará localizado na região Nordeste paraense, a cerca de 220 km de Belém. ⁠ Fundado em 1781 e elevado a município em 1882, seu nome oficial foi alterado para Salinópolis em 1943, mas o apelido 'Salinas' permanece como a denominação popular predominante. ⁠"
        data="Melhor época: julho a setembro"
      ></Card>
      <Card
        wiki="https://pt.wikipedia.org/wiki/Ilha_de_Maraj%C3%B3"
        imagem={marajo}
        nome="Ilha do Marajó"
        localizacao="Marajó, Pará, Brasil"
        descricao="A Ilha de Marajó é a maior ilha fluviomarinha do mundo, situada no estado do Pará, na região Norte do Brasil, no encontro das águas do rio Amazonas com o oceano Atlântico. ⁠ Com uma área de aproximadamente 40.100 km² (sendo o Arquipélago do Marajó composto por cerca de 3.000 ilhas e ilhotas totalizando 49.000 km²), sua geografia divide-se entre florestas densas a oeste e extensas savanas alagáveis a leste, onde a população convive com grandes rebanhos de búfalos."
        data="Melhor época: agosto a novembro"
      ></Card>
    </div>
  );
}
