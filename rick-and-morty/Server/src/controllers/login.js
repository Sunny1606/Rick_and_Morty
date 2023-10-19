//Ahora si crearemos un controlador que valide la información de nuestra base de datos.

const { User } = require("../models/User");

const login = async (req, res) => {
  const { email, password } = req.query;

  if (!email || !password) {
    res.status(404).json({ message: "Faltan datos" });
  }
  try {
    // Busca un usuario por su email
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    // Compara la contraseña proporcionada con la contraseña del usuario
    if (user.password !== password) {
      return res.status(403).json({ message: "Contraseña incorrecta" });
    }

    // Si las contraseñas coinciden, responde con acceso exitoso
    return res.status(200).json({ access: true });
  } catch (error) {
    res.status(500).json({ error: message });
  }
};
module.exports = { login };
