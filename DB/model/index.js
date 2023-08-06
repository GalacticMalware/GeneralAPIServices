const { DataTypes } = require('sequelize');
const { sequelize } = require('../configSql');

const UserModel = require('./User');

const User = UserModel(sequelize, DataTypes);

module.exports = {User};