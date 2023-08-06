const { Sequelize } = require("sequelize");

const database = process.env.DBNAME;
const username = process.env.DBUSER;
const password = process.env.DBPASS;
const host = process.env.DBHOST;

const sequelize = new Sequelize(database, username, password, {
    host,
    dialect: "mysql",
    logging: true
});

const dbConncet = async() => {
    try {
        await sequelize.authenticate();
        console.log("conexion correcta");
    } catch (err) {
        console.log("MYSQL_ERROR_CONEXION", err);
    }
};

module.exports = { sequelize, dbConncet };