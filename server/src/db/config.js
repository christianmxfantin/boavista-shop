const { config } = require("../config/config.js");

module.exports = {
  development: {
    username: config.dbUser,
    password: config.dbPass,
    database: config.dbName,
    host: config.dbHost,
    port: config.dbPort,
    dialect: "postgres",
  },
  test: {
    username: config.dbUser,
    password: config.dbPass,
    database: config.dbName,
    host: config.dbHost,
    port: config.dbPort,
    dialect: "postgres",
  },
  production: {
    username: config.dbUser,
    password: config.dbPass,
    database: config.dbName,
    host: config.dbHost,
    port: config.dbPort,
    dialect: "postgres",
  },
};
