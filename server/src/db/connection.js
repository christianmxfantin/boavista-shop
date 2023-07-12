const { Pool } = require("pg");
// const { config } = require("../config");

const pool = new Pool({
  host: "localhost",
  port: 5432,
  database: "boavista",
  user: "postgres",
  password: "12345",
});

module.exports = pool;
