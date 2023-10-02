import PATHROUTES from "../Helpers/pathRouters";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Nav({ onSearch }) {
  const random = Math.floor(Math.random() * 825 + 1);

  return (
    <div className={styles.nav}>
      <button onClick={() => onSearch(random)} className={styles.onSearch}>
        Random
      </button>
      <SearchBar onSearch={onSearch} className={styles.SearchBar} />

      <button className={styles.btnHome}>
        <Link to={PATHROUTES.HOME}>
          Home
        </Link>
      </button>

      <button className={styles.btnAbout}>
        <Link to={PATHROUTES.ABOUT}>
          About
        </Link>
      </button>

      <button className={styles.btnFavorites}>
        <Link to={PATHROUTES.FAVORITES}>
          Favorites
        </Link>
      </button>
    </div>
  );
}
