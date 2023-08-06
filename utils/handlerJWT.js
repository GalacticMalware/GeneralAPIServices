const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.TOKEN_SECRET;

/**
 * Verify a token
 * @param {string} token User token 
 * @returns {bool} Returns value bool
 */
const verifyToke = async (token) => jwt.verify(token, JWT_SECRET)

/**
 * Generate a token
 * @param {object} user Data user 
 * @returns {string} Returns a valid token
 */
const tokenSing = async (user) =>
  await jwt.sign(
    {
      _id: user.id,
    },
    JWT_SECRET,
    {
      expiresIn: "5h",
    }
  );

module.exports = { verifyToke, tokenSing };
