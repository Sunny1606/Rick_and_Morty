/* eslint-disable react/prop-types */
import styles from "./Card.module.css";

export default function Card(props) {
  const { name, species, gender, origin, image, onClose } = props;
  return (
    <div className={styles.div}>
      <button onClick={onClose}>X</button>
      <h2 className={styles.h2}>{name}</h2>
      <h2 className={styles.h2}>{species}</h2>
      <h2 className={styles.h2}>{gender}</h2>
      <h2 className={styles.h2}>{origin.name}</h2>
      <img src={image} alt="" />
    </div>
  );
}

