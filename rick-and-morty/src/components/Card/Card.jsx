/* eslint-disable react/prop-types */
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({ id, name, species, gender, image, onClose }) {
  return (
    <div className={styles.div}>
      <div className={styles.butonOnCloseContainer}>
      <button onClick={() => onClose(id)} className={styles.onClose}>
        X
      </button>
      </div>
      <Link to={`/Detail/${id}`}>
        <h2>{name}</h2>
      </Link>
      <h2 className={styles.h2}>{species}</h2>
      <h2 className={styles.h2}>{gender}</h2>
      <h2 className={styles.h2}>{origin.name}</h2>
      <img src={image} alt="" className={styles.img} />
    </div>
  );
}
