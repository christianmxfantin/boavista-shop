const Sequelize = require("sequelize");
const { config } = require("../config/config.js");

const sequelize = new Sequelize(config.dbName, config.dbUser, config.dbPass, {
  host: config.dbHost,
  dialect: config.dbDial,
});

module.exports = { sequelize };
