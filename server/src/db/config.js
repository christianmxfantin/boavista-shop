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
    username: config.DB_USER,
    password: config.DB_PASS,
    database: config.DB_NAME,
    host: config.DB_HOST,
    dialect: "postgres",
  },
  production: {
    username: config.DB_USER,
    password: config.DB_PASS,
    database: config.DB_NAME,
    host: config.DB_HOST,
    dialect: "postgres",
  },
};
