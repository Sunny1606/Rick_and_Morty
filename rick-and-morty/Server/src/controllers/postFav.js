// const { Model } = require("sequelize");
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

const postFav = async (req, res) => {

try {
        const { name, origin, status, image, species, gender } = req.body;
        
        if (!name || !origin || !status || !image || !species || !gender) {
            return res.status(401).send({ message: "Faltan datos" });
        }

      await Favorite.findOrCreate({
      where: { id },
      defaults: { name, status, species, origin, image, gender }
    });

      const favorite = await Favorite.findAll();
      res.json(favorite);
         
        } catch (error) {
            return res.status(500).json(error.message);
          }
        };
      
        
        module.exports = postFav;
        
        // await Favorite.findOrCreate({
        //   where: { id, name, origin, status, image, species, gender },
        // });