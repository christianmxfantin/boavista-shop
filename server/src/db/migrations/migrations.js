const Umzug = require("umzug");
const db = require("../../db/models/index.js");

var migrationsConfig = {
  storage: "sequelize",
  storageOptions: {
    sequelize: db.sequelize,
    // modelName: 'SequelizeMeta' // No need to specify, because this is default behaviour
  },
  migrations: {
    params: [db.sequelize.getQueryInterface(), db.sequelize.constructor],
    path: "./migrations", // path to folder containing migrations
    pattern: /\.js$/,
  },
};

var seedsConfig = {
  storage: "sequelize",
  storageOptions: {
    sequelize: models.sequelize,
    modelName: "SequelizeData", // Or whatever you want to name the seeder storage table
  },
  migrations: {
    params: [
      models.sequelize.getQueryInterface(),
      models.sequelize.constructor,
    ],
    path: "./seeds", // path to folder containing seeds
    pattern: /\.js$/,
  },
};

var migrator = new Umzug(migrationsConfig);
var seeder = new Umzug(seedsConfig);

module.exports = () => migrator.up().then(() => seeder.up());
