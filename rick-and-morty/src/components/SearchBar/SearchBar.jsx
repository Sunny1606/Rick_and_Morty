/* eslint-disable react/prop-types */
import styles from "./SearchBar.module.css";

export default function SearchBar(props) {
  return (
    <div>
      <input type="search" />
      <button onClick={props.onSearch} className={styles.button}>
        Agregar
      </button>
    </div>
  );
}
