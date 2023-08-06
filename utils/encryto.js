const bcrypt = require('bcrypt');
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

const encrypt = async(text) => await bcrypt.hashSync(text, salt);

const decrypt = (text,bd) => bcrypt.compareSync(text, bd) ? true : false ;

/**
 * Compare the password
 * @param {string} passwordPlain Plane text
 * @param {string} hashPassword Hashed text
 * @returns Return true or false
 */
const compare = async(passwordPlain, hashPassword) => await bcrypt.compare(passwordPlain, hashPassword);

module.exports = {
    encrypt,
    decrypt,
    compare
}