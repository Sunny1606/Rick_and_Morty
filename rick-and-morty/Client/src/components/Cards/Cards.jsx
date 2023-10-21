/* eslint-disable react/prop-types */
import Card from "../Card/Card.jsx";
import styles from "./Cards.module.css";

export default function Cards({ characters, onClose }) {
  return (
    <div className={styles.container}>
      {characters.map((character) => {
        console.log(character);
        return (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            species={character.species}
            status={character.status}
            gender={character.gender}
            origin={character.origin}
            image={character.image}
            onClose={onClose}
          />
        );
      })}
    </div>
  );
}
