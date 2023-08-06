const {User} = require("../DB/model");

/**
 * Search user in databases
 * @param {string} Email 
 * @returns {object} Returns the user data
 */
const searchAuthUser = async(Email) => await User.findOne({ where: {Email}, raw:true});

/**
 * Register user
 * @param {object} data Data user 
 * @returns {object} Returns the user data to generate the token
 */
const createUser = async (data) => await User.create(data);
  
  module.exports = {searchAuthUser, createUser};