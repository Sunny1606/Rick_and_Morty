import PATHROUTES from "../Helpers/pathRouters";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

let { nav, home, about } = styles;

// eslint-disable-next-line react/prop-types
export default function Nav({ onSearch }) {
  const random = Math.floor(Math.random() * 825 + 1);

  return (
    <div className={nav}>
      <button onClick={() => onSearch(random)} className={styles.onSearch}>
        Random
      </button>
      <SearchBar onSearch={onSearch} className={styles.SearchBar} />

      <Link to={PATHROUTES.HOME} className={home}>
        Home
      </Link>
      <Link to={PATHROUTES.ABOUT} className={about}>
        About
      </Link>
    </div>
  );
}
