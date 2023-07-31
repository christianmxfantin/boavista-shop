require("dotenv").config();

const config = {
  port: process.env.PORT || 4000,
  dbUser: process.env.DB_USER,
  dbPass: process.env.DB_PASS,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
  dbDial: process.env.DB_DIAL,
};

module.exports = { config };
