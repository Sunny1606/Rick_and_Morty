// const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");

// //GET
// function getCharById(req, res) {
//   const { id } = req.params; //obtener el valor del parámetro id de la URL y asignarlo a la variable id

//   axios(URL + id)
//     .then(({ data }) => {
//       const { id, name, gender, species, origin, image } = data;
//       const character = { id, name, gender, species, origin, image };

//       return character.name //retorna si encuentra el personaje como json o retorna un mensaje de error 404.
//         ? res.json(character)
//         : res.status(404).send("character not found");
//     })
//     // se envía un mensaje de error JSON con un código de estado 500 (Internal Server Error) para indicar que hubo un problema al hacer la solicitud a la API.
//     .catch((error) => {
//       res.status(500).send({ message: error.message });
//     });
// }


const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req,res) => {
  try {
    const { id } = req.params;
    const { name, gender, species, origin, image } =  (await axios.get(URL + id)).data; 
    const character = { id, name, gender, species, origin, image };
    
    return character.name 
    ? res.json(character)
    : res.status(404).send("character not found");
  } catch (error) { res.status(500).send({ message: error.message });}
};

module.exports = getCharById;