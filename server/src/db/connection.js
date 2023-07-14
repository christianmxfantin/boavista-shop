const Sequelize = require("sequelize");
const { config } = require("../config/config.js");

const sequelize = new Sequelize(
  config.dbName,
  config.dbUser,
  config.dbPassword,
  {
    host: config.dbHost,
    dialect: "postgres",
  }
);

module.exports = { sequelize };
