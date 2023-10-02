//GET LOGIN
const users = require("../utils/users");

const login = (req, res) => {
  const { email, password } = req.query;
  let access = false;

  //si hay un usuario que coincide con el email y contraseña
  users.find((user) => email === user.email && password === user.password)
    ? res.status(200).json({ access: true })
    : res.status(200).json({ access: false });
};

module.exports = login;
