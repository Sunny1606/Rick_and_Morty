const { Favorite } = require("../DB_connection");

// module.exports = async (req, res) => {
//   try {
//     const { name, origin, status, image, species, gender } = req.body;

//     if (!id || !name || !origin || !status || !image || !species || !gender) {
//       return res.status(401).json({ message: "Faltan datos" });
//     }
//     await Favorite.findOrCreate({
//       where: { id },
//       defaults: { name, status, species, origin, image, gender },
//     });
//     const favorite = await Favorite.findAll();
//     res.json(favorite);

//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };

// const postFav = async (req, res) => {
 
//   try {
//     const { name, status, image, species, gender } = req.body; 
//     const id = req.body.id.toString();
//     const origin = req.body.origin.name;
   
//     if (!id ||!name || !origin || !status || !image || !species || !gender) {
//       return res.status(401).send("Faltan datos");
//     } else { 
     
//       const [character, created] = await Favorite.findOrCreate({
//         where: { id:id },
//         defaults: {
//           name: name,
//           status: status,
//           species: species,
//           origin: origin,
//           image: image,
//           gender: gender,
//         },
//       });
//       console.log(created);

//       const favorite = await Favorite.findAll();
//       res.json(favorite);
//     }
//   } catch (error) {
//     return res.status(500).json(error.message);
//   }
// };

async function postFav(req, res) {
  try {
      const { name, status, image, species, gender } = req.body;
      const origin = req.body.origin.name;
      const id = req.body.id.toString();
      console.log({ id, name, origin, status, image, species, gender });
      if (!id || !name || !origin || !status || !species || !gender) res.status(401).json("Faltan datos");
      else {
          const [character, created] = await Favorite.findOrCreate({
              where: { id: id },
              defaults: {
                  name: name,
                  origin: origin,
                  status: status,
                  image: image,
                  species: species,
                  gender: gender
              }
          });
          const findCharacter = await Favorite.findAll();
          res.json(findCharacter);
      }
  } catch (error) {
      res.status(500).json(error.message);
  }
}

module.exports = postFav;


