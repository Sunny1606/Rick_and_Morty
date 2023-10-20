// const { Model } = require("sequelize");
const {Favorite} = require("../DB_connection");

const postFav = async (req, res) => {
  const { name, origin, status, image, species, gender } = req.body;

  if (!name || !origin || !status || !image || !species || !gender) {
    res.status(401).json({ message: "Faltan datos" });
  }
  try {
    await Favorite.create({ name, origin, status, image, species, gender });

    const allFavorites = await Favorite.findAll();

    // Responde con la lista de personajes favoritos
    return res.status(200).json(allFavorites);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = postFav;