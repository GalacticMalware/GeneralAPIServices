const { encrypt, compare } = require("../utils/encryto");
const { searchAuthUser, createUser } = require("../services/authService");
const { tokenSing } = require("../utils/handlerJWT");

const login = async (req, res) => {
  try {
    req = req.body;
    const user = await searchAuthUser(req.Email);

    if (user.length == 0) throw "El usuario no existe";

    const { Password } = user;
    const check = await compare(req.Password, Password);

    if (!check) throw "Ocurrio un error inesperado";

    delete user.Password;

    const data = await tokenSing(user);
    
    return res.json({
      status: "success",
      message: "El usuario inicio sesion",
      data,
    });
  } catch (e) {
    return res.status(500).json({
      status: "error",
      message: typeof e === "object" ? "Ocurrio un error inesperado" : e,
      data: [],
    });
  }
};

const register = async (req, res) => {
  try {
    req.body.Password = await encrypt(req.body.Password);
    let user = await createUser(req.body);
    user.set("Password", undefined, { strict: false });

    return res.json({ status: "success", data: await tokenSing(user) });
  } catch (e) {
    return res.status(400).json({
      status: "error",
      message: (e.name = "SequelizeUniqueConstraintError"
        ? "El correo ya se ha registrado anteriormente"
        : typeof e === "object"
        ? "Ocurrio un error inesperado"
        : e),
      data: [],
    });
  }
};

module.exports = { login, register };