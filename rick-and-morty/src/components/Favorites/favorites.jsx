import style from './favorite.module.css'
import { connect , useSelector} from "react-redux";
import Card from "../Card/Card";

// eslint-disable-next-line react-refresh/only-export-components
const Favorites = () => {
  // const { myFavorites } = props;
const myFavorites= useSelector(state=>state.myFavorites)
  return (
  <div className={style.favoriteContainer}>
    {myFavorites.map((character)=> {
    return (
        <Card
        key={character.id}
        id={character.id}
        name={character.name}
        species={character.species}
        gender={character.gender}
        origin={character.origin}
        image={character.image} 
        />
    )
  })}
  </div>
  )
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

// eslint-disable-next-line react-refresh/only-export-components
export default connect(mapStateToProps, null)(Favorites);
