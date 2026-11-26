import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.nav_logo}>ParáTrip</div>
        <ul className={styles.nav_links}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Destinos">Destinos</Link>
          </li>
          <li>
            <Link to="/Sobre">Sobre</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
